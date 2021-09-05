import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const SlideTwo = () => {
  return (
    <div className="slide-two">
      <div className="flex-container">
        <p className="perspective">BŁYSKAWICZNE</p>
        <div className="flex-columns">
          <p>
            <FontAwesomeIcon icon={faBolt} /> Kredyty
          </p>
          <p>
            <FontAwesomeIcon icon={faBolt} /> Przelewy
          </p>
          <p>
            <FontAwesomeIcon icon={faBolt} /> Przewalutowania
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;
