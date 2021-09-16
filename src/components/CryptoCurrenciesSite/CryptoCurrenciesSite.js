import React, { useState, useEffect } from "react";

import "./CryptoCurrenciesSite.css";

const CryptoCurrenciesSite = () => {
  /*  4b12c0ec1320606bcc4fc5ff33fe66cd85a618c3 */

  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4b12c0ec1320606bcc4fc5ff33fe66cd85a618c3&ids=BTC,ETH,DOT,DOGE,LTC,LUNA,ATOM,ADA,&interval=1d,30d&convert=EUR&per-page=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setCryptos(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="crypto-site">
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
                <td>{symbol}</td>
                <td>{parseFloat(price).toFixed(4)} EUR</td>
                <td>{parseFloat(high).toFixed(4)} EUR</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCurrenciesSite;
