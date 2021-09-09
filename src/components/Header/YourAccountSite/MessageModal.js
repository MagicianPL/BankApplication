import React from "react";

const MessageModal = (props) => {
  const modalBoolean = props.variable;

  return (
    <div className={`message-modal ${modalBoolean ? "" : "show-modal"}`}>
      <h2>OSTRZEŻENIE</h2>
      <p>
        Przewalutowanie na walutę euro obciąży Twoje konto na kwotę{" "}
        <span>5 euro</span> - jest to całkowity koszt liczony po bieżącym kursie
      </p>
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
