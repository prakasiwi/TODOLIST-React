import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getDetailList } from "../actions/listAction";
import DetailListComponent from "../components/DetailListComponent";
// import { Table } from "reactstrap"

class DetailListContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getDetailList(this.props.match.params.id));
    }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail List {this.props.match.params.id}</h1>
        <DetailListComponent />
      </Container>
    );
  }
}

export default connect()(DetailListContainer);
