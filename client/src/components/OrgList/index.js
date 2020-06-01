import React from "react";
import {Thumbnail} from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both OrgList and OrgListItem from this file

// OrgList renders a bootstrap list item
export function OrgList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// OrgListItem renders a bootstrap list item containing data from the recipe api call
export function OrgListItem({
    thumbnailImage,
    name,
    shortDescription,
    url
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnailImage || "https://placehold.it/300x300"} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{name}</h3>
                        <p>Short Description: {shortDescription}</p>
                        <a rel="noreferrer noopener" target="_blank" href={url}>
                            View
            </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}