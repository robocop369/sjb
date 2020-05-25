import React from "react";

import { Row, Container } from "../components/Grid";

import Gallery from "./Gallery"
import Landlords from "./Landlord"
import ChicagoData from "../components/ChicagoData"

function Homepage() {
 

    return (
           
      <Container fluid>
        <Row>
        <ChicagoData/>
        </Row>
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
