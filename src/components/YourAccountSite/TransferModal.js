import React from "react";

import "./MessageModal.css";

const TransferModal = (props) => {
  const modalBoolean = props.variable;

  return (
    <div className={`message-modal ${modalBoolean ? "" : "show-modal"}`}>
      <h2>OSTRZEŻENIE</h2>
      {props.text}
      <button className="cancel" onClick={() => props.function(true)}>
        OK
      </button>
    </div>
  );
};

export default TransferModal;
