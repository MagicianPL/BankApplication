import React, { useState } from "react";
import MessageModal from "./MessageModal";
import History from "./History";
import TransferModal from "./TransferModal";
import { Link } from "react-router-dom";

import "./Account.css";

const Account = (props) => {
  const [isVisible, setIsVisible] = useState({ visibility: "visible" });
  const [buttonText, setButtonText] = useState("Ukryj saldo");
  //Below I'm setting button's text (convert button)
  const [convertButtonText, setConvertButtonText] = useState(true);
  //Below modal that informs about exchange currency cost
  const [modalIsHidden, setModalIsHidden] = useState(true);
  const [modalText, setModalText] = useState("");

  const [transferModalIsHidden, setTransferModalIsHidden] = useState(true);

  //For account history of transactions
  const [historyIsHidden, setHistoryIsHidden] = useState(true);

  const toggleModal = (boolean) => {
    setModalIsHidden(boolean);
  };

  const toggleTransferModal = (boolean) => {
    setTransferModalIsHidden(boolean);
  };

  //Toggling balance view + text on button
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
      title: "Koszt przewalutowania",
      amount: (props.euro / 1) * cost,
      date: new Date(),
      income: false,
    };
    console.log(`${props.euro} * ${cost}`);

    props.setHistory([transaction, ...props.history]);
    //Above I'm creating new array of transactions. Just created one + existing already
  };

  //Converting money on another currency
  const convert = () => {
    if (props.isPln) {
      const amount = ((1 / props.euro) * props.balance - 6).toFixed(2);
      //(original currency / end currency) - it's exchange rate * amount of money to exchange

      props.setBalance(amount);
      props.setIsPln(!props.isPln);
      setConvertButtonText(!convertButtonText);
      setModalText(
        <p>
          Przewalutowanie na walutę euro obciąży Twoje konto na kwotę
          <span>6 euro</span> - jest to całkowity koszt liczony po bieżącym
          kursie
        </p>
      );
      setModalIsHidden(true);
      newTransaction(6);
    } else {
      const amount = ((props.euro / 1) * (props.balance - 6.5)).toFixed(2);

      props.setBalance(amount);
      props.setIsPln(!props.isPln);
      setModalIsHidden(true);
      setConvertButtonText(!convertButtonText);
      newTransaction(6.5);
    }
  };

  const cashTransfer = () => {
    if (!props.isPln) {
      setModalText(
        <p>
          Aby wykonać przelew musisz przewalutować konto na <span>PLN</span>
        </p>
      );
      setTransferModalIsHidden(false);
    }
  };

  return (
    <div className="account">
      <h2>
        <button className="hide" onClick={toggleBalance}>
          {buttonText}
        </button>
        <span style={isVisible}>
          SALDO: {props.balance.toLocaleString()} {props.isPln ? "PLN" : "EUR"}
        </span>{" "}
        <button
          className="conversion"
          onClick={() => {
            props.isPln
              ? setModalText(
                  <p>
                    Przewalutowanie na walutę euro obciąży Twoje konto na kwotę
                    <span> 6 euro</span> - jest to całkowity koszt liczony po
                    bieżącym kursie
                  </p>
                )
              : setModalText(
                  <p>
                    Przewalutowanie na walutę PLN obciąży Twoje konto na kwotę
                    <span> 6.5 euro</span> - jest to całkowity koszt liczony po
                    bieżącym kursie
                  </p>
                );
            setModalIsHidden(false);
          }}
        >
          {props.isPln ? "Przewalutuj na euro" : "Przewalutuj na PLN"}
        </button>
      </h2>

      <h3>00 2847 2049 0483 0000 9304</h3>
      <div className="actions">
        {props.isPln ? (
          <Link to="/transfer">
            <button>Zrób przelew</button>
          </Link>
        ) : (
          <button onClick={cashTransfer}>Zrób przelew</button>
        )}

        <button
          onClick={() => {
            /*toggling history*/
            setHistoryIsHidden(!historyIsHidden);
          }}
        >
          Historia
        </button>
      </div>
      {!historyIsHidden ? <History transactions={props.history} /> : null}
      <MessageModal
        variable={modalIsHidden}
        function={toggleModal}
        convert={convert}
        text={modalText}
      />
      <TransferModal
        variable={transferModalIsHidden}
        function={toggleTransferModal}
        text={modalText}
      />
    </div>
  );
};

export default Account;
