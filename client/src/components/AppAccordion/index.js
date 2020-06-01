import {React} from "react";
import {Accordion} from "../Bootstrap/Accordion";
import {Card} from "../Bootstrap/Card";
import {AccordionToggle} from "../Bootstrap/AccordionToggle";
import "./style.css";

function AppAccordion() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <AccordionToggle eventKey="0">Click me!</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <AccordionToggle eventKey="1">Click me!</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export {AppAccordion}
