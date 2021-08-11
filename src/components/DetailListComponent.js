import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import axios from 'axios'

const mapStateToProps = (state) => {
  return {
    getDetailList: state.lists.getDetailList,
    errorDetailList: state.lists.errorDetailList,
  };
};

const handleClick = () => {
  axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
  .then(response => console.log(response))
}
const DetailListComponent = (props) => {
    return (
        <Table striped>
          <div>
        {/* <button>CEK</button> */}
      </div>
      <tbody>
      <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getDetailList.id}</td>
        </tr>
        <tr>
          <td width="200">Title</td>
          <td width="10">:</td>
          <td>{props.getDetailList.title}</td>
        </tr>
        <tr>
          <td width="200">Description</td>
          <td width="10">:</td>
          <td>{props.getDetailList.description}</td>
        </tr>
        <tr>
          <td width="200">Status</td>
          <td width="10">:</td>
          <td>{props.getDetailList.status}</td>
        </tr>
        <tr>
          <td width="200">CretaedAt</td>
          <td width="10">:</td>
          <td>{props.getDetailList.createdAt}</td>
        </tr>

      </tbody>
    </Table>
    )
  }


export default connect(mapStateToProps, null)(DetailListComponent);
