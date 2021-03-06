import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./DepositSite.css";

const DepositSite = (props) => {
  const [monthsValue, setMonthsValue] = useState("");
  const [inputIsHidden, setInputIsHidden] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [errorIsHidden, setErrorIsHidden] = useState(true);
  const [answerIsHidden, setAnswerIsHidden] = useState(true);

  const [earnings, setEarnings] = useState("");

  const calculateEarnings = () => {
    setEarnings(
      parseInt(((0.05 * parseFloat(inputValue)) / 12) * monthsValue).toFixed(2)
    );
  };

  const validateInput = () => {
    const isValid = /^\d+$/;

    if (!inputValue) {
      setErrorIsHidden(false);
      setAnswerIsHidden(true);
    } else if (!isValid.test(inputValue)) {
      setErrorIsHidden(false);
      setAnswerIsHidden(true);
    } else {
      setErrorIsHidden(true);
      calculateEarnings();
      setAnswerIsHidden(false);
    }
  };

  const setMonths = (e) => {
    setMonthsValue(e.target.value);
    setInputIsHidden(false);
    setAnswerIsHidden(true);
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
        <div
          className="money"
          style={inputIsHidden ? { visibility: "hidden" } : null}
        >
          <p className="mini-header">Ile chcesz ulokować?</p>
          <p className="input-error">
            {errorIsHidden ? null : "Błędnie wpisana kwota"}
          </p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setAnswerIsHidden(true);
            }}
          />
          <p className="p-info">
            (Wpisz pełną kwotę bez znaków kropki czy przecinka)
          </p>
          <button className="next" onClick={validateInput}>
            Dalej <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          className="deposit-info"
          style={answerIsHidden ? { visibility: "hidden" } : null}
        >
          Nieźle! Po upływie {monthsValue} miesięcy zarobisz aż {earnings}{" "}
          złotych!
        </div>
      </div>
    </div>
  );
};

export default DepositSite;
