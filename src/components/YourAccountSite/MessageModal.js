import React from "react";

import "./MessageModal.css";

const MessageModal = (props) => {
  const modalBoolean = props.variable;

  return (
    <div className={`message-modal ${modalBoolean ? "" : "show-modal"}`}>
      <h2>OSTRZEŻENIE</h2>
      {props.text}
      <button className="cancel" onClick={() => props.function(true)}>
        Anuluj
      </button>
      <button className="accept" onClick={props.convert}>
        Akceptuj
      </button>
    </div>
  );
};

export default MessageModal;
