import React from "react";
import { Navbar, Button } from "../Bootstrap";
import Form from 'react-bootstrap/Form'
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function AppNavbar() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          // src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Ward Housing Portal"
        />{''}
        <h2>Ward Housing Portal</h2>
        <Form inline>
          <Form.Control type="text" placeholder="Type in your address to find your ward" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Brand>
    </Navbar>
  )
};

export default AppNavbar;