import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChicagoData from "./ChicagoData/ChicagoData"
// import { Col, Row, Container } from "../Grid";
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
          <Col md={{ span: 3, offset: 3 }}>{<ChicagoData/>}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>DATASHEET</Col>
        </Row>
        {/* <Row>
        <Landlords/>
        </Row> */}
        {/* <Row>
        <Footer/>
        </Row> */}
      </Container>
   </div>
    );
  }


export default Dashboard;
