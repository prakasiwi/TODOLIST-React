import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postListCreate } from "../actions/listAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataList: state.lists.getResponDataList,
    errorDataList: state.lists.errorDataList,
  };
};

class CreateListsContainer extends Component {
  handleSubimit(data) {
    this.props.dispatch(postListCreate(data));
  }
  render() {
    if (this.props.getResponDataList || this.props.errorDataList) {
      if(this.props.errorDataList){
        swal("Failed", this.props.errorDataList, "error");
      }else{
        swal("List Created!", "Title : " + this.props.getResponDataList.title, "success");
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create</h1>
        <FormComponent onSubmit={(data) => this.handleSubimit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateListsContainer);
