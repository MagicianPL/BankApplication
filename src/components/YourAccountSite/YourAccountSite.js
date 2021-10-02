import React, { useState } from "react";

import Account from "./Account";
import Currencies from "./Currencies";
import CryptoCurrenciesSite from "../CryptoCurrenciesSite/CryptoCurrenciesSite";

import "./YourAccountSite.css";

const YourAccountSite = ({
  login,
  historyTransactions,
  setHistoryTransactions,
  accountBalance,
  setAccountBalance,
  isPln,
  setIsPln,
}) => {
  //For saveEuro Fn
  const [euroMid, setEuroMid] = useState("");

  //Callback Fn for Currencies Component - it allows to set euroMid
  const saveEuro = (obj) => {
    setEuroMid(obj.mid);
  };

  return (
    <div className="your-account-site">
      <Account
        euro={euroMid}
        history={historyTransactions}
        setHistory={setHistoryTransactions}
        balance={accountBalance}
        setBalance={setAccountBalance}
        isPln={isPln}
        setIsPln={setIsPln}
      />
      <Currencies prop={saveEuro} />
      <CryptoCurrenciesSite />

      {/*<BankTransfer history={historyTransactions} setHistory={setHistoryTransactions} balance={accountBalance} setBalance={setAccountBalance} isPln={isPln} />*/}
    </div>
  );
};

export default YourAccountSite;
