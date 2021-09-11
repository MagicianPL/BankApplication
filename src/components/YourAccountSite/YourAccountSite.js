import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Account from "./Account";
import Currencies from "./Currencies";

import "./YourAccountSite.css";

const YourAccountSite = () => {
  const [euroMid, setEuroMid] = useState("");

  const saveEuro = (obj) => {
    setEuroMid(obj.mid);
  };

  return (
    <div className="your-account-site">
      <div className="top-bar">
        <p>{<FontAwesomeIcon icon={faCog} />}Witaj, NICK</p>
        <Nav />
      </div>
      <Account euro={euroMid} />
      <Currencies prop={saveEuro} />
    </div>
  );
};

export default YourAccountSite;
