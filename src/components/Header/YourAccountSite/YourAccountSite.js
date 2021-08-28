import React from "react";
import Nav from "../../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog
} from "@fortawesome/free-solid-svg-icons";

const YourAccountSite = () => {
  return (
      <div className="top-bar">
          <p>{<FontAwesomeIcon icon={faCog} />}Witaj, NICK</p>
          <Nav />
      </div>
  )
};

export default YourAccountSite;
