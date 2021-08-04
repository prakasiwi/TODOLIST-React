import React, { Component } from 'react';
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getLists } from '../actions/listAction';
import {deleteDataList} from '../actions/listAction';

class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getLists());
        this.props.dispatch(deleteDataList());
    }
    render() {
        return (
            <div>
                <TableComponent />
            </div>
        );
    }
};

export default connect()(HomeContainer);