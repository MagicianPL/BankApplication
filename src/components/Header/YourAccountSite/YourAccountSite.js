import React from "react";
import Nav from "../../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog
} from "@fortawesome/free-solid-svg-icons";
import Account from "./Account";
import Currencies from "./Currencies";

const YourAccountSite = () => {
  return (
      <>
      <div className="top-bar">
          <p>{<FontAwesomeIcon icon={faCog} />}Witaj, NICK</p>
          <Nav />
      </div>
      <Account />
      <Currencies />
      </>
  )
};

export default YourAccountSite;
