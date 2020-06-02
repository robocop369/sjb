import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
import Collapse from "../Collapse";
import Button from "../Button";

const { Body, Header, Title } = Card;

class CardComponent extends Component {
    state = { isActive: false };

    toggleVisibility = () =>
        this.setState(prevState => ({ isActive: !this.state.isActive }));

    render = () => (
        <div className={`${this.state.isActive ? "active" : "inactive"}`}>
            <Card onClick={this.toggleVisibility}>
                <Header style={{ padding: 0 }}>
                    <Row>
                        <Col xs={9}>
                            <Button onClick={this.toggleVisibility}>
                                {!this.state.isActive ? "+" : "-"}
                            </Button>
                            <Title style={{ display: "inline-block" }}>
                                {this.props.title}
                            </Title>
                        </Col>
                        <Col style={{ paddingTop: 7 }} xs={3}>
                            Test Text 123
            </Col>
                    </Row>
                </Header>
                <Collapse>
                    <Body style={{ padding: 10 }}>Test Text 456</Body>
                </Collapse>
            </Card>
        </div>
    );
}

export default CardComponent;

CardComponent.propTypes = {
    title: PropTypes.string.isRequired
};
