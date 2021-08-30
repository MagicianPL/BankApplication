import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [currenciesObjects, setCurrenciesObjects] = useState([]);
  const [date, setDate] = useState("");
  const [gold, setGold] = useState("");
  const [priceGold, setPriceGold] = useState("");

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a")
      .then((json) => json.json())
      .then((data) => {
        console.log(data)
        setDate(data[0].effectiveDate); 
        data[0].rates.map((obj) => {
          const {code} = obj;
          obj.id = code;
          if (
            code === "USD" ||
            code === "HUF" ||
            code === "CZK" ||
            code === "UAH" ||
            code === "RUB" ||
            code === "GBP" ||
            code === "CHF" ||
            code === "AUD" ||
            code === "JPY" ||
            code === "HRK" ||
            code === "TRY" ||
            code === "CAD"
          ) {
            setCurrenciesObjects((prev) => [...prev, obj]);
          }
        });
      });
  }, []);

  useEffect(()=> {
    fetch("http://api.nbp.pl/api/cenyzlota")
    .then(resp => resp.json())
    .then(data => {
    setGold(data);
    console.log(data[0].cena)
      setPriceGold(data[0].cena)
  })
  }, [])

  return (
    <section>
      <div className="currencies">
        <h2>Kursy walut na dzień {date}</h2>
        <div className="currencies-container">
          {currenciesObjects.map((obj) => {
            const { code, mid, currency } = obj;
            return (<h4>
              {currency} {code} : {mid}
            </h4>);
          })}
          <h4>ZŁOTO: wyliczona w NBP cena 1 g złota (w próbie 1000) - {priceGold}zł</h4>
        </div>
      </div>
    </section>
  );
};

export default Currencies;
