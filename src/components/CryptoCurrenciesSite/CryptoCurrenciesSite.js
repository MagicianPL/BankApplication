import React from "react";

import "./CryptoCurrenciesSite.css";

const CryptoCurrenciesSite = () => {
  /*  4b12c0ec1320606bcc4fc5ff33fe66cd85a618c3 */

  fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=4b12c0ec1320606bcc4fc5ff33fe66cd85a618c3&ids=BTC,ETH,ADA,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

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
          <tr>
            <td>Ethereum</td>
            <td>ETH</td>
            <td>3453.68 EUR</td>
            <td>3934.56</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCurrenciesSite;
