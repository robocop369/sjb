import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

// const DashboardGrid = (props) => {
    return (
        <div clasName="container dashboard">
<Container>
    <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
    </Row>
</Container>
        </div>
    );
}

// export default DashboardGrid;
