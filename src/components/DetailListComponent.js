import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getDetailList: state.lists.getDetailList,
    errorDetailList: state.lists.errorDetailList,
  };
};
const DetailListComponent = (props) => {
    return (
        <Table striped>
      <tbody>
        <tr>
          <td width="200">Title</td>
          <td width="10">:</td>
          <td>{props.getDetailList.title}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
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
