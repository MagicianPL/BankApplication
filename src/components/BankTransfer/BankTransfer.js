import React, { useState } from "react";

import "./BankTransfer.css";

const BankTransfer = () => {
  const [inputTransferValue, setInputTransferValue] = useState("");

  const period = (e) => {
    setInputTransferValue(e.target.value);
    console.log(inputTransferValue);
  };

  const validation = () => {
    const regExp = /^[1-9]*(\.[0-9][0-9])?$/;
    console.log(inputTransferValue);
    if (regExp.test(inputTransferValue)) {
      console.log("Is Valid!!!");
    } else {
      console.log("Is invalid");
    }
  };

  return (
    <div className="bank-transfer-page">
        <div className="bank-transfer-container">
            <h1>PRZELEW<br />GOTÓWKOWY</h1>
            <form>
                <label htmlFor="recipient">Nazwa Odbiorcy</label>
                    <input type="text" id="recipient" />
                
                <label htmlFor="account-number">Na konto</label>
                    <input type="text" id="account-number" />

                    <label htmlFor="transfer-title">Tytuł przelewu</label>
                    <input type="text" id="transfer-title" />

                    <label htmlFor="cash-amount">Na konto</label>
                    <input type="number" id="cash-amount" />
                
            </form>
        </div>
     {/*} <input type="number" onChange={period} value={inputTransferValue}></input>
      <button onClick={validation}>wyslij</button>*/}
    </div>
  );
};

export default BankTransfer;
