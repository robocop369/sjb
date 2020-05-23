import React from "react";
import CardBody from "../CardBody";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Cardmidde({ title, image, profileUrl }) {
  return (
    <div>
      <CardHeading title={title} />
      <CardImg image={image} />
      <CardBody profileUrl={profileUrl} />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default Cardmidde;
