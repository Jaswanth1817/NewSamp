// Main.js
import React from "react";
import { Outlet, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Person } from 'react-bootstrap-icons';

const Main = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" bg="light" variant="light" className="text-dark">
        <Container>
          <Navbar.Brand>
            <Person size={30} className="d-inline-block align-top me-2" />
            Jaswanth Kongara
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
              <Link to={"/addition"} className="nav-link">
                Addition
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </React.Fragment>
  );
};

export default Main;
