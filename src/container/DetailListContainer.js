import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getDetailList } from "../actions/listAction";
import DetailListComponent from "../components/DetailListComponent";
import { getLists } from '../actions/listAction';
import axios from 'axios';
// import { Table } from "reactstrap"

class DetailListContainer extends Component {
  // state = {
  //   data: [],
  // }
    componentDidMount(){
        this.props.dispatch(getDetailList(this.props.match.params.id));
        this.props.dispatch(getDetailList());
      // axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      // .then((res) => {
      //   const data = res.data.results;
      //   this.setState({data})
      //   console.log(data)
      //});
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
