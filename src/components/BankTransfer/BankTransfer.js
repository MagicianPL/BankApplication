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
      <input type="number" onChange={period} value={inputTransferValue}></input>
      <button onClick={validation}>wyslij</button>
    </div>
  );
};

export default BankTransfer;
