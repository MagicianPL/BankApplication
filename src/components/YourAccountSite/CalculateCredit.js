import React from "react";

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
      <div className="input-section"></div>
    </section>
  );
};

export default CalculateCredit;
