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
                        </Col>
                    </Row>
                </Header>
                <Collapse>
                    <Card.Body style={{ padding: 10 }}>
                        <div><h3> Chicago Homeless</h3>
                        <p> “Since 1980, the Chicago Coalition for the Homeless (CCH) has had a clear mission: “We organize and advocate to prevent and end homelessness, because we believe housing is a human right in a just society.“</p>
                        <a href="https://www.chicagohomeless.org">Link</a>
                        <br></br>
                        <h3>LUCHA|Advancing Housing as a Human Right</h3>
                        <p> “LUCHA advocates for the enforcement of tenants’ rights and the preservation of affordable housing in the Chicago area. We partner with community organizations, elected officials, and community members to support policies that further fair and affordable housing.“</p>
                        <a href="https://lucha.org">Link</a>
                        <br></br>
                        <h3>Housing Action Illinois</h3>
                        <p>“Housing Action Illinois is a statewide coalition formed to protect and expand the availability of quality, affordable housing throughout Illinois.“</p>
                        <a href="https://housingactionil.org/"></a>
                        <br>
                        </br>
                        <h3>Mixed Use/ Commercial Development</h3>
                        <p>“14W (1325 W Street, NW)- Perseus Realty and the YMCA of Metropolitan Washington are building a new mixed-use facility at the corner of 14th & W Streets, NW. The project will feature a new, state-of-the-art 46,000 sq. ft. YMCA athletic facility, with child care and community meeting space, and 231 rental units. The 14th Street façade of the building will anchor 12,200 sq. ft. of retail space. The developers will restore and preserve the facades and portions of the historic townhomes for incorporation into the new construction.“</p>
                        </div>

                    </Card.Body>
                </Collapse>
            </Card>
        </div>
    );
}

export default CardComponent;

CardComponent.propTypes = {
    title: PropTypes.string.isRequired
};
