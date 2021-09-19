import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Account from "./Account";
import Currencies from "./Currencies";
import CalculateCredit from "./CalculateCredit";


import "./YourAccountSite.css";

const YourAccountSite = ({ login }) => {
  const [euroMid, setEuroMid] = useState("");

  const saveEuro = (obj) => {
    setEuroMid(obj.mid);
  };

  

  return (
    <div className="your-account-site">
      <div className="top-bar">
        <p>
          {<FontAwesomeIcon icon={faCog} />}Witaj, {login}
        </p>
        <Nav />
      </div>
      <Account euro={euroMid} />
      <Currencies prop={saveEuro} />
      <CalculateCredit />
    </div>
  );
};

export default YourAccountSite;
