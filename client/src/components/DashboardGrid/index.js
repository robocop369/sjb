import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

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