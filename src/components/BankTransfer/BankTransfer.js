import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "./ConfirmationModal";

import "./BankTransfer.css";

const BankTransfer = ({ history, setHistory, balance, setBalance, isPln }) => {
  /* Above I'm destructuring props (history is an array of objects - transactions data) and setHistory is a function to set history. Balance is just cash on account balance n setBalance for setting this.
  Also if isPln is true - we can do cash transfer. Props from YourAccountSite Component*/

  /* Four variables for four inputs. On inputs I have inline function, that sets values */
  const [recipientValue, setRecipientValue] = useState("");
  const [accountNumberValue, setAccountNumberValue] = useState("");
  const [transferTitleValue, setTransferTitleValue] = useState("");
  const [cashAmountValue, setCashAmountValue] = useState("");

  const [errorRecipient, setErrorRecipient] = useState("");
  const [errorAccountNum, setErrorAccountNum] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorCash, setErrorCash] = useState("");

  const [confirmationModal, setConfirmationModal] = useState(false);

  const recipientValidation = () => {
    if (!recipientValue) {
      setErrorRecipient("Niewypełnione pole");
    } else {
      setErrorRecipient("");
      return true;
    }
  };

  const accountNumberValidation = () => {
    const isValid = /^\d+$/; //only numbers

    if (!accountNumberValue) {
      setErrorAccountNum("Niewypełnione pole");
    } else if (!isValid.test(accountNumberValue)) {
      setErrorAccountNum("Nieprawidłowy format");
    } else {
      setErrorAccountNum("");
      return true;
    }
  };

  const transferTitleValidation = () => {
    if (!transferTitleValue) {
      setErrorTitle("Niewypełnione pole");
    } else {
      setErrorTitle("");
      return true;
    }
  };

  const cashAmountValidation = () => {
    const isValid = /^[0-9][0-9]*?(\.[0-9][0-9])?$/; //Only numbers and two decimal places
    if (!cashAmountValue) {
      setErrorCash("Niewypełnione pole");
    } else if (!isValid.test(cashAmountValue)) {
      setErrorCash("Nieprawidłowy format");
    } else if (
      Number.parseFloat(cashAmountValue) > Number.parseFloat(balance)
    ) {
      setErrorCash("Niewystarczająca ilość środków");
    } else {
      setErrorCash("");

      setBalance(
        (
          Number.parseFloat(balance) - Number.parseFloat(cashAmountValue)
        ).toFixed(2)
      );
      return true;
    }
  };

  const transferFormValidation = () => {
    recipientValidation();
    accountNumberValidation();
    transferTitleValidation();
    cashAmountValidation();

    if (
      recipientValidation() &&
      accountNumberValidation() &&
      transferTitleValidation() &&
      cashAmountValidation()
    ) {
      setConfirmationModal(true);
      createObject();
      setRecipientValue("");
      setAccountNumberValue("");
      setTransferTitleValue("");
      setCashAmountValue("");
    }
  };

  /* *************************************************************************************************** */
  /*All code in this section is about creating another object in historyTransactionsArray. It works like this:
1. We have empty objects - transferedValues n transactionObject.
2. We have initialRender variable - it's true.
3. On useEffect I'm checking if it's initial render - when it's true, I'm setting variable to false and have dependency array.
4. When user submit form, submitForm Fn is triggered. In this Fn I'm triggering createObject => createObject creates object and sets transferedValues => When transferedValues is changed, useEffect is triggering and in this useEffect I'm triggering createTransactionObject => This sets transactionObject => It's trigger another useEffect, when I'm setting History => And we have another object in accountHistory! Awesome!

  /* For object that contains data from inputs. This object is created in a function */
  const [transferedValues, setTransferedValues] = useState({});
  const [transactionObject, setTransactionObject] = useState({});

  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) {
      setHistory([transactionObject, ...history]);
    }
  }, [transactionObject]);

  useEffect(() => {
    if (!initialRender.current) {
      createTransactionObject();
    } else {
      initialRender.current = false;
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
    /*createObject();*/
    transferFormValidation();
  };
  /* **************************************************************************************************** */
  /*const regExp = /^[1-9]*(\.[0-9][0-9])?$/;*/

  return (
    <div className="bank-transfer-page">
      <div className="bank-transfer-container">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>
        <h1>
          PRZELEW
          <br />
          GOTÓWKOWY
        </h1>
        <form>
          <label htmlFor="recipient">Nazwa Odbiorcy</label>
          <p className="error">{errorRecipient}</p>
          <input
            type="text"
            id="recipient"
            value={recipientValue}
            onChange={(e) => {
              setRecipientValue(e.target.value);
            }}
          />

          <label htmlFor="account-number">Na konto</label>
          <p className="error">{errorAccountNum}</p>
          <input
            type="text"
            id="account-number"
            placeholder="dowolna ilość CYFR"
            value={accountNumberValue}
            onChange={(e) => {
              setAccountNumberValue(e.target.value);
            }}
          />

          <label htmlFor="transfer-title">Tytuł przelewu</label>
          <p className="error">{errorTitle}</p>
          <input
            type="text"
            id="transfer-title"
            value={transferTitleValue}
            onChange={(e) => {
              setTransferTitleValue(e.target.value);
            }}
          />

          <label htmlFor="cash-amount">Kwota PLN</label>
          <p className="error">{errorCash}</p>
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
        {confirmationModal ? (
          <ConfirmationModal
            show={confirmationModal}
            toggle={setConfirmationModal}
          />
        ) : null}
      </div>
      {/* <input type="number" onChange={period} value={inputTransferValue}></input>
      <button onClick={validation}>wyslij</button>*/}
    </div>
  );
};

export default BankTransfer;
