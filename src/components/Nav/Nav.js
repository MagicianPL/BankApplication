import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
      <Link to="/">
          <li>Konto</li>
        </Link>
        <Link to="/about">
          <li>O Banku</li>
        </Link>
        <Link to={"/credit"}>
        <li>Kredyty</li>
        </Link>
        <Link to="deposit">
          <li>Lokata dla Ciebie</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
