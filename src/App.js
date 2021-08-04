import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import CreateListContainer from './container/CreateListContainer';
import DetailListContainer from './container/DetailListContainer';
import EditListContainer from './container/EditListContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
    
          <Route path="/create" exact component={CreateListContainer} />

          <Route path="/detail/:id" exact component={DetailListContainer} />
            
          <Route path="/edit/:id" exact component={EditListContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
