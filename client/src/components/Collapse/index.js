import React from "react";
import PropTypes from "prop-types";

const Collapse = ({ children }) => (
    <span className="folding-pannel">{children}</span>
);

export default Collapse;
// console.log(Collapse, "Here!")
Collapse.propTypes = {
    children: PropTypes.node.isRequired
};
