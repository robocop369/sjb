import React from "react";

import { Row, Container } from "../components/Grid";
// import { Footer } from "../components/Footer";

import Gallery from "./Gallery"
// import Landlords from "./Landlord"
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
        {/* <Row>
        <Landlords/>
        </Row> */}
        {/* <Row>
        <Footer/>
        </Row> */}
      </Container>
    );
  }


export default Homepage;
