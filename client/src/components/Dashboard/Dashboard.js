import React from "react";

import { Row, Container } from "../Grid";
// import { Footer } from "../components/Footer";

import Gallery from "../../pages/Gallery"

import Landlords from "../../pages/Landlord"
import ChicagoData from "./ChicagoData/ChicagoData"


function Dashboard() {
 

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


export default Dashboard;
