import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [currenciesObjects, setCurrenciesObjects] = useState([]);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a")
      .then((json) => json.json())
      .then((data) => {
        data[0].rates.map((obj) => {
          if (obj.code === "USD" || obj.code === "GBP") {
            setCurrenciesObjects((prev) => [...prev, obj]);
          }
        });
      });
  }, []);

  return (
    <section>
      <div className="currencies">
        <h2>Kursy walut na dzień 28.08.2021</h2>
      </div>
    </section>
  );
};

export default Currencies;
