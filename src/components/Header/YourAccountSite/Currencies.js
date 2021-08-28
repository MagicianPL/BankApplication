import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [currenciesObjects, setCurrenciesObjects] = useState([]);

 /* useEffect(() => {
    fetch(
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=USD&target=PLN"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCurrenciesObjects((prevState) => [...prevState, data]);
      })
      .then(setTimeout(eurOnPln, 2000));
  }, []);*/

  const eurOnPln = () => {
    fetch(
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=EUR&target=PLN"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCurrenciesObjects((prevState) => [...prevState, data]);
        console.log(data);
        console.log(currenciesObjects);
      })
      .then(setTimeout(gbpOnPln, 2000));
  };

  const gbpOnPln = () => {
    fetch(
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=GBP&target=PLN"
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .then(setTimeout(chfOnPln, 2000));
  };

  const chfOnPln = () => {
    fetch(
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=CHF&target=PLN"
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .then(setTimeout(czkOnPln, 2000));
  };

  const czkOnPln = () => {
    fetch(
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2249da7bff9a45dcacf4b37dbeb05c72&base=CZK&target=PLN"
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <div className="currencies">
        <h2>Kursy walut na dzień 28.08.2021</h2>
      </div>
    </section>
  );
};

export default Currencies;
