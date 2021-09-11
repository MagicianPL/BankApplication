import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import "./CalculateCredit.css";

const CalculateCredit = () => {
  const [showInstallmentInfo, setShowInstallmentInfo] = useState(false);
  const [creditValue, setCreditValue] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
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
            }}
          />{" "}
          {"\u00A0"}miesięcy
        </p>
      </div>

      {showInstallmentInfo ? (
        <div className="installment-info">
          Jeśli przyznamy Ci XXX złotych kredytu na X lat i X miesięcy, Twoja
          rata będzie wynosiła tylko XXX złotych miesięcznie
        </div>
      ) : null}

      <button
        onClick={() => {
          setShowInstallmentInfo(true);
        }}
      >
        <FontAwesomeIcon icon={faRedo} />
        PRZELICZ
      </button>
    </section>
  );
};

export default CalculateCredit;
