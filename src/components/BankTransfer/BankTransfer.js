import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./BankTransfer.css";

const BankTransfer = ({ history, setHistory }) => {
  /* Above I'm destructuring props (history is an array of objects - transactions data) and setHistory is a function to set history. Props from YourAccountSite Component*/

  /* Four variables for four inputs. On inputs I have inline function, that sets values */
  const [recipientValue, setRecipientValue] = useState("");
  const [accountNumberValue, setAccountNumberValue] = useState("");
  const [transferTitleValue, setTransferTitleValue] = useState("");
  const [cashAmountValue, setCashAmountValue] = useState("");

  /* For object that contains data from inputs. This object is created in a function */
  const [transferedValues, setTransferedValues] = useState({});

  const [transactionObject, setTransactionObject] = useState({});

  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) {
      console.log(transactionObject);
      setHistory([transactionObject, ...history]);
    }
  }, [transactionObject]);

  useEffect(() => {
    if (!initialRender.current) {
      createTransactionObject();
      console.log("another render");
    } else {
      initialRender.current = false;
      console.log("initial render");
    }
  }, [transferedValues]);


  const createTransactionObject = () => {
    setTransactionObject({
      title: `${transferedValues.recipient} - ${transferedValues.transferTitle}`,
      amount: parseFloat(transferedValues.cashAmount),
      income: false,
      date: new Date(),
    });
  };

  /* On createObject function I'm creating object that contains values from inputs. This is triggered, when the form is send */
  const createObject = () => {
    setTransferedValues({
      recipient: recipientValue,
      accountNumber: accountNumberValue,
      transferTitle: transferTitleValue,
      cashAmount: cashAmountValue,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    createObject();
  };

  /*const regExp = /^[1-9]*(\.[0-9][0-9])?$/;*/

  return (
    <div className="bank-transfer-page">
      <div className="bank-transfer-container">
        <FontAwesomeIcon icon={faArrowCircleLeft} />
        <h1>
          PRZELEW
          <br />
          GOTÓWKOWY
        </h1>
        <form>
          <label htmlFor="recipient">Nazwa Odbiorcy</label>
          <input
            type="text"
            id="recipient"
            value={recipientValue}
            onChange={(e) => {
              setRecipientValue(e.target.value);
            }}
          />

          <label htmlFor="account-number">Na konto</label>
          <p className="error-account-number">Nieprawidłowy numer konta</p>
          <input
            type="text"
            id="account-number"
            value={accountNumberValue}
            onChange={(e) => {
              setAccountNumberValue(e.target.value);
            }}
          />

          <label htmlFor="transfer-title">Tytuł przelewu</label>
          <input
            type="text"
            id="transfer-title"
            value={transferTitleValue}
            onChange={(e) => {
              setTransferTitleValue(e.target.value);
            }}
          />

          <label htmlFor="cash-amount">Kwota PLN</label>
          <p className="error-cash-amount">Nieprawidłowy format kwoty</p>
          <input
            type="number"
            id="cash-amount"
            value={cashAmountValue}
            onChange={(e) => {
              setCashAmountValue(e.target.value);
            }}
          />

          <button type="submit" onClick={submitForm}>
            Wyślij przelew
          </button>
        </form>
      </div>
      {/* <input type="number" onChange={period} value={inputTransferValue}></input>
      <button onClick={validation}>wyslij</button>*/}
    </div>
  );
};

export default BankTransfer;
