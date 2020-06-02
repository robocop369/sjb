import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "../components/Jumbotron";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

function Portal() {

    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        // src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Ward Housing Portal"
                    />
            </Navbar.Brand>
            </Navbar>
                    <h2>Ward Housing Portal</h2>
                    <Form inline>
                        <Form.Control id="pac-input" type="text" placeholder="Type in your address to find your ward" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
        <Container fluid>
            <Jumbotron fluid>
                <h1>City Map Of Chicago</h1>
                <div id="map"></div>
            </Jumbotron>
        </Container>
        </div >
    );
}


export default Portal;