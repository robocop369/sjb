import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function AppFooter() {
  return (
       <Container>
        <Row>
          <Col><Button href="#contact" variant="secondary">Contact Us</Button></Col>
          <Col md="auto"><Button href="#faq" variant="info">FAQs</Button></Col>
          <Col xs lg="2"><Button href="#team" variant="primary">Learn About Us</Button>
          </Col>
        </Row>
      </Container>
   )
};
export default AppFooter;
