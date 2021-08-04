import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">TODO List</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;