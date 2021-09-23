import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Account from "./Account";
import Currencies from "./Currencies";
import CalculateCredit from "./CalculateCredit";
import BankTransfer from "../BankTransfer/BankTransfer";

import "./YourAccountSite.css";

// Array of objects - each object has transaction data for history of transactions
const history = [
  {
    title: "Żabka - artykuły spożywcze",
    amount: 18.72,
    income: false,
    date: new Date(2021, 8, 1),
  },
  {
    title: "Hebe - sklep kosmetyczny",
    amount: 247.5,
    income: false,
    date: new Date(2021, 8, 1),
  },
  {
    title: "McDonald",
    amount: 32.38,
    income: false,
    date: new Date(2021, 7, 17),
  },
  {
    title: "Przelew wychodzący do Marian Jarząbek",
    amount: 300,
    income: false,
    date: new Date(2021, 7, 16),
  },
  {
    title: "Przelew przychodzący",
    amount: 15598.6,
    income: true,
    date: new Date(2021, 7, 16),
  },
];

const YourAccountSite = ({ login }) => {

  const [historyTransactions, setHistoryTransactions] = useState(history);

  
  //For saveEuro Fn
  const [euroMid, setEuroMid] = useState("");

  //Callback Fn for Currencies Component - it allows to set euroMid
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
      <Account euro={euroMid} history={historyTransactions} setHistory={setHistoryTransactions} />
      <Currencies prop={saveEuro} />
      <CalculateCredit />
      <BankTransfer history={historyTransactions} setHistory={setHistoryTransactions} />
    </div>
  );
};

export default YourAccountSite;
