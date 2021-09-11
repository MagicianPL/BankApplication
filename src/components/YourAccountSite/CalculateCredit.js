import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import "./CalculateCredit.css";

const CalculateCredit = () => {
  const [showInstallmentInfo, setShowInstallmentInfo] = useState(false);
  const [showErrorInfo, setShowErrorInfo] =
    useState(false); /*This is error div for inputs validation*/
  const [creditValue, setCreditValue] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [installment, setInstallment] = useState(null);
  const isValid = /^\d+$/;

  const calculating = () => {
    const percentages = (0.065 * creditValue) / 12;
    setInstallment(creditValue / (years * 12 + months) + percentages);
    //This is value of credit installment
    setShowInstallmentInfo(true);
  };

  const checkValue = () => {
    if (!creditValue || !isValid.test(creditValue)) {
      setShowErrorInfo(true);
    } else {
      return true;
    }
  };

  const checkYearsNMonths = () => {
    if (!years && !months) {
      setShowErrorInfo(true);
    } else {
      return true;
    }
  };

  const checkYears = () => {
    if (years) {
      if (!isValid.test(years)) {
        setShowErrorInfo(true);
      } else {
        return true;
      }
    }
  };

  const checkMonths = () => {
    if (months) {
      if (!isValid.test(months)) {
        setShowErrorInfo(true);
      } else {
        return true;
      }
    }
  };

  const inputsValidation = () => {
    if (!creditValue || !isValid.test(creditValue)) {
      setShowErrorInfo(true);
    } else if (!years && !months) {
      setShowErrorInfo(true);
    } else if (years && months) {
      if (!isValid.test(months) || !isValid.test(years)) {
        setShowErrorInfo(true);
      } else {
        setShowErrorInfo(false);
        calculating();
      }
    } else if (years) {
      if (isValid.test(years)) {
        setShowErrorInfo(false);
        calculating();
      } else {
        setShowErrorInfo(true);
      }
    } else if (months) {
      if (!isValid.test(months)) {
        setShowErrorInfo(true);
      } else {
        setShowErrorInfo(false);
        calculating();
      }
    }
  };

  return (
    <section id="credit">
      <h2>
        Spełnij <span>MARZENIA</span> z kredytem gotówkowym w Banku u Skrudża
      </h2>
      <p>
        Najlepszy możliwy wybór - oprocentowanie to tylko <span>6.5%</span> w
        skali roku!
      </p>
      <p>
        Wybierz kwotę pożyczki oraz czas spłaty, a my wyliczymy Twoją ratę
        kredytu
      </p>
      <div className="input-section">
        <p>
          Kwota pożyczki:{" "}
          <input
            type="number"
            min="100"
            placeholder="10000"
            value={creditValue}
            onChange={(e) => {
              setCreditValue(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />
          <span className="info">
            (Wpisz pełną kwotę bez znaków kropki czy przecinka)
          </span>
        </p>
        <p>
          Chcę wziąć kredyt na{"\u00A0"}
          <input
            type="number"
            min="0"
            placeholder="10"
            value={years}
            onChange={(e) => {
              setYears(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />
          {"\u00A0"}lat i{"\u00A0"}
          <input
            type="number"
            min="0"
            placeholder="0"
            value={months}
            onChange={(e) => {
              setMonths(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />{" "}
          {"\u00A0"}miesięcy
        </p>
      </div>

      {showInstallmentInfo ? (
        <div className="installment-info">
          Jeśli przyznamy Ci {creditValue} złotych kredytu na{" "}
          {years ? `${years} lat` : null}
          {years && months ? " i " : null}
          {months ? `${months} miesięcy` : null}, Twoja rata będzie wynosiła
          tylko {installment.toFixed(2)} złotych miesięcznie
        </div>
      ) : null}
      {showErrorInfo ? (
        <div className="error-info">Błędnie wypełnione pola!</div>
      ) : null}
      <button onClick={inputsValidation}>
        <FontAwesomeIcon icon={faRedo} />
        PRZELICZ
      </button>
    </section>
  );
};

export default CalculateCredit;
