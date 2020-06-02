import React from "react";
import Col from "react-bootstrap/Col";
import ChicagoData from "./ChicagoData/ChicagoData";
import {Row, Container } from "../Grid";
import Accordion from "../Accordion";
function Dashboard() {

  return (

    <div clasName="container dashboard">
      <Container>
        <Row>
          <br>
          </br>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>{<ChicagoData/>}</Col>
        </Row>
        <Accordion/>
      </Container>
    </div>
  );
}


export default Dashboard;
