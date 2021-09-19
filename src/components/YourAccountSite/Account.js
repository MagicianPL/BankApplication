import React, { useEffect, useState } from "react";
import MessageModal from "./MessageModal";
import History from "./History";

import "./Account.css";

const historyTransactions = [
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

const Account = (props) => {
  const [accountBalance, setAccountBalance] = useState(15000);
  const [isPln, setIsPln] = useState(true);
  const [isVisible, setIsVisible] = useState({ visibility: "visible" });
  const [buttonText, setButtonText] = useState("Ukryj saldo");
  const [convertButtonText, setConvertButtonText] = useState(true);
  const [modalIsHidden, setModalIsHidden] = useState(true);
  const [historyIsHidden, setHistoryIsHidden] = useState(true);

  const toggleModal = (boolean) => {
    setModalIsHidden(boolean);
  };

  const toggleBalance = () => {
    isVisible.visibility === "visible"
      ? setIsVisible({ visibility: "hidden" })
      : setIsVisible({ visibility: "visible" });

    isVisible.visibility === "visible"
      ? setButtonText("Pokaż saldo")
      : setButtonText("Ukryj saldo");
  };

  const newTransaction = (cost) => {
    //adding new transaction to an array of transactions (triggered in convert fn)

    const transaction = {
      title: "Przewalutowanie na euro",
      amount: ((props.euro / 1) * cost).toFixed(2),
      date: new Date(),
      income: false,
    };
    console.log(`${props.euro} * ${cost}`);

    historyTransactions.unshift(transaction); //new object is added to an array
  };

  const convert = () => {
    if (isPln) {
      const amount = ((1 / props.euro) * accountBalance - 6).toFixed(2);
      //(original currency / end currency) - it's exchange rate * amount of money to exchange

      setAccountBalance(amount);
      setIsPln(!isPln);
      setConvertButtonText(!convertButtonText);
      setModalIsHidden(true);
      newTransaction(6);
    } else {
      const amount = ((props.euro / 1) * (accountBalance - 6.5)).toFixed(2);

      setAccountBalance(amount);
      setIsPln(!isPln);
      setConvertButtonText(!convertButtonText);
      newTransaction(6.5);
    }
  };

  return (
    <div className="account">
      <h2>
        <button className="hide" onClick={toggleBalance}>
          {buttonText}
        </button>
        <span style={isVisible}>
          SALDO: {accountBalance.toLocaleString()} {isPln ? "PLN" : "EUR"}
        </span>{" "}
        <button
          className="conversion"
          onClick={isPln ? () => setModalIsHidden(false) : convert}
        >
          {convertButtonText ? "Przewalutuj na euro" : "Przewalutuj na PLN"}
        </button>
      </h2>

      <h3>00 2847 2049 0483 0000 9304</h3>
      <div className="actions">
        <button>Zrób przelew</button>
        <button
          onClick={() => {
            /*toggling history*/
            setHistoryIsHidden(!historyIsHidden);
          }}
        >
          Historia
        </button>
      </div>
      {!historyIsHidden ? <History transactions={historyTransactions} /> : null}
      <MessageModal
        variable={modalIsHidden}
        function={toggleModal}
        convert={convert}
      />
    </div>
  );
};

export default Account;
