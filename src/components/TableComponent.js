import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import {deleteList} from '../actions/listAction'

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah anda yakin ingin menghapus data?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteList(id))
      swal("Sukses!", {
        icon: "success",
      });
    } else {
      swal("Gagal dihapus");
    }
  });
}

const mapStateToProps = (state) => {
  return {
    getLists: state.lists.getLists,
    errorLists: state.lists.errorLists
  };
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => { 
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "createdAt",
      text: "CreatedAt",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr 2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      { props.getLists ? (
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.getLists}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to={"create/"}>
                  <Button color="dark" className="mr 2">
                    <FontAwesomeIcon icon={faUserPlus} /> Create
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="search.." />
                </div>
              </Col>
            </Row>
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider> 
      ) : ( 
      <div className="text-center" >
        {props.errorLists ? <h4>{props.errorLists}</h4> : <Spinner color="blue" />}  
      </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
