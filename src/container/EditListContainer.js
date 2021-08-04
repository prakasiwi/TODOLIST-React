import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from '../components/BackComponent';
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getDetailList, putListEdit } from "../actions/listAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataList: state.lists.getResponDataList,
    errorDataList: state.lists.errorDataList,
  };
};

class EditListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getDetailList(this.props.match.params.id));
}

handleSubimit(data) {
  this.props.dispatch(putListEdit(data, this.props.match.params.id));
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
        <h1>Edit List</h1>
        <FormComponent onSubmit={(data) => this.handleSubimit(data)}/>
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditListContainer);
