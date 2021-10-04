import React, { useState, useEffect } from "react";

import "./CryptoCurrenciesSite.css";

const CryptoCurrenciesSite = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(
        "https://api.nomics.com/v1/currencies/ticker?key=4b12c0ec1320606bcc4fc5ff33fe66cd85a618c3&ids=BTC,ETH,DOT,DOGE,LTC,LUNA,ATOM,ADA,&interval=1d,30d&convert=EUR&per-page=100&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          setCryptos(data);
        });
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="crypto-site">
      <p className="link">
        <a href="https://nomics.com">
          Crypto Market Cap & Pricing Data Provided By Nomics
        </a>
      </p>
      {cryptos.length !== 0 ? (
        <>
          <p className="fetching-info">(dane odświeżane są co 10 sekund)</p>
          <table>
            <thead>
              <tr>
                <th>WALUTA</th>
                <th>SYMBOL</th>
                <th>CENA</th>
                <th>MAX</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((obj) => {
                const { symbol, high, name, price } = obj;

                return (
                  <tr key={symbol}>
                    <td>{name}</td>
                    <td>
                      <i>{symbol}</i>
                    </td>
                    <td>{parseFloat(price).toFixed(4)} EUR</td>
                    <td>{parseFloat(high).toFixed(4)} EUR</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1>Proszę czekać, pobieram dane...</h1>
      )}
    </div>
  );
};

export default CryptoCurrenciesSite;
