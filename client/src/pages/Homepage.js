import React from "react";

import { Row, Container } from "../components/LandlordComplaint/Grid";

import Gallery from "./Gallery"
import Landlords from "./Landlord"

function Homepage() {
 

    return (
           
      <Container fluid>
        <Row>
        <Gallery/>
        </Row>
        <Row>
        <Landlords/>
        </Row>
      </Container>
    );
  }


export default Homepage;
