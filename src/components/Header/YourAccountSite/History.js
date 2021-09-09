import React, { useState } from "react";

const History = ({ transactions }) => {
  console.log(transactions);
  return (
    <div className="history">
      {transactions.map((transaction) => {
        const { title, amount, date, income } = transaction;
        return (
          <div
            className="transaction"
            style={!income ? { color: "red" } : null}
          >
            <p className="transaction-date">{date.toLocaleDateString()}</p>
            <p className="transaction-title">{title}</p>
            <p className="amount">{amount.toFixed(2)} PLN</p>
          </div>
        );
      })}
    </div>
  );
};

/* <div className="history">
            <div className="transaction">
              <p className="transaction-date">17.08.2021</p>
              <p className="transaction-title">Żabka - sklep spożywczy</p>
              <p className="amount">19.56</p>
            </div>
          </div> */

export default History;
