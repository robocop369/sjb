import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import CustomToggle from "react-bootstrap/AccordionToggle";


import "./style.css";

// const Accordion = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
function AppAccordion() {
    return (
        
        <Accordion defaultActiveKey="0">
            <Card className="object">
                <Card.Header>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AppAccordion
