import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import "./CalculateCredit.css";

const CalculateCredit = () => {
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
          Kwota pożyczki: <input type="number" min="100" placeholder="10000" />
          <span className="info">
            (Wpisz pełną kwotę bez znaków kropki czy przecinka)
          </span>
        </p>
        <p>
          Chcę wziąć kredyt na <input type="number" min="0" placeholder="10" />{" "}
          lat i <input type="number" min="0" placeholder="0" /> miesięcy
        </p>
      </div>
      <button><FontAwesomeIcon icon={faRedo} />PRZELICZ</button>
    </section>
  );
};

export default CalculateCredit;
