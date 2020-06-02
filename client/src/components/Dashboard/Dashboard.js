import React from "react";
import Col from "react-bootstrap/Col";
import ChicagoData from "./ChicagoData/ChicagoData";
import {Row, Container } from "../Grid";
import Accordion from "../Accordion";
import AppFooter from "../AppFooter";
import "../../../src/styles.css";


// import { Footer } from "../components/Footer";

function Dashboard() {

  return (

    <div clasName="container dashboard">
      <Container>
        <Row>
          <Col md={4}><button href="#portal" variant="primary">Map</button></Col>
          <Col md={{ span: 4, offset: 4 }}>TESTING SPACE</Col>
          <br>
          </br>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>{<ChicagoData/>}</Col>
        </Row>
        <Accordion/>
        <Row>
        {/* <AppFooter/> */}
        </Row>
      </Container>
    </div>
  );
}


export default Dashboard;
