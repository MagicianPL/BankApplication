import React from "react";

import "./DepositSite.css";

const DepositSite = (props) => {
  return (
    <div className="deposit-site">
      <h1>
        <span>{props.login},</span> sprawdź jaką lokatę przygotowaliśmy specjalnie dla
        Ciebie!
      </h1>
      <div className="deposit">
        <div className="choose-deposit"></div>
        <div className="deposit-info"></div>
      </div>
    </div>
  );
};

export default DepositSite;
