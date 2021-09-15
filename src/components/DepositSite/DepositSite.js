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
        <div className="time-period">
            <p className="mini-header">Na jaki okres lokujesz pieniądze?</p>
            <p className="time">3 miesiące</p>
            <p className="time">6 miesięcy</p>
            <p className="time">12 miesięcy</p>
            <p className="time">24 miesiące</p>
            <p className="time">36 miesięcy</p>
        </div>
        <div className="money">
            <input type="number"></input>
        </div>
        <div className="deposit-info">
            mrkfkrfrmegrkegktrgktr g rtkgtr b ktrg ktr gktgjrngrt
        </div>
      </div>
    </div>
  );
};

export default DepositSite;
