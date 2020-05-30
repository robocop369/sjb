import React from "react";
import Cardleft from "../CardLeft";
import Cardmiddle from "../CardMiddle";
import Cardright from "../CardRight";
import "./style.css";

// Jon [0,1,2,3,4].every(3,1) # [1,4]

function CardContainer({ title, image, profileUrl, handleBtnClick }) {
  return (
    <div className="row">

      <div className="col-4">

        <Cardleft
          title={title}
          image={image}
          profileUrl={profileUrl}
          handleBtnClick={handleBtnClick}
        />
      </div>
      <div className="col-4">

        <Cardmiddle
          title={title}
          image={image}
          profileUrl={profileUrl}
        />
      </div>
      <div className="col-4">

        <Cardright
          title={title}
          image={image}
          profileUrl={profileUrl}
          handleBtnClick={handleBtnClick}
        />
      </div>

    </div>
  );
}

export default CardContainer;
