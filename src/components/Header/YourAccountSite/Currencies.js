import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [currenciesObjects, setCurrenciesObjects] = useState([]);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a")
      .then((json) => json.json())
      .then((data) => {
        console.log(data)
        data[0].rates.map((obj) => {
          const {code} = obj;
          obj.id = code;
          if (
            code === "USD" ||
            code === "GBP" ||
            code === "CHF" ||
            code === "AUD" ||
            code === "CAD"
          ) {
            setCurrenciesObjects((prev) => [...prev, obj]);
          }
        });
      });
  }, []);

  return (
    <section>
      <div className="currencies">
        <h2>Kursy walut na dzień 28.08.2021</h2>
        {currenciesObjects.map((obj) => {
          console.log(obj)
          return(
          <h4 key={obj.id}>
            {obj.currency}  {obj.code} : {obj.mid}
          </h4>)
        })}
      </div>
    </section>
  );
};

export default Currencies;
