import React, { useState } from "react";

import "./DepositSite.css";

const DepositSite = (props) => {
  const [monthsValue, setMonthsValue] = useState("");

  const setMonths = (e) => {
    console.log(e.target.value);
    setMonthsValue(e.target.value);
  };

  return (
    <div className="deposit-site">
      <h1>
        <span>{props.login},</span> sprawdź jaką lokatę przygotowaliśmy
        specjalnie dla Ciebie!
      </h1>
      <div className="deposit">
        <div className="time-period">
          <p className="mini-header">Na jaki okres lokujesz pieniądze?</p>
          <button className="time" value="3" onClick={setMonths}>
            3 miesiące
          </button>
          <button className="time" value="6" onClick={setMonths}>
            6 miesięcy
          </button>
          <button className="time" value="12" onClick={setMonths}>
            12 miesięcy
          </button>
          <button className="time" value="24" onClick={setMonths}>
            24 miesiące
          </button>
          <button className="time" value="36" onClick={setMonths}>
            36 miesięcy
          </button>
        </div>
        <div className="money">
          <p className="mini-header">Ile chcesz ulokować?</p>
          <input type="number" />
          <p>(Wpisz pełną kwotę bez znaków kropki czy przecinka)</p>
        </div>
        <div className="deposit-info">
          Nieźle! Po wybranym okresie zarobisz XXX złotych!
        </div>
      </div>
    </div>
  );
};

export default DepositSite;
