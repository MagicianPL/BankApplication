import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/about">
          <li>O Banku</li>
        </Link>

        <li>Kredyty</li>

        <Link to="/cryptocurrencies">
          <li>Kryptowaluty</li>
        </Link>
        <Link to="deposit">
          <li>Lokata dla Ciebie</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
