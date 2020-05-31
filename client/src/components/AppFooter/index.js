import React from "react";
import "./style.css";
import { Footer, Container, Row, Col, Button } from "../Bootstrap";

function AppFooter() {
  return (
    <Footer>
      <Container>
        <Row>
          <Col><Button href="#contact" variant="secondary">Contact Us</Button></Col>
          <Col md="auto"><Button href="#faq" variant="info">FAQs</Button></Col>
          <Col xs lg="2"><Button href="#team" variant="primary">Learn About Us</Button>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
};
export default AppFooter;
