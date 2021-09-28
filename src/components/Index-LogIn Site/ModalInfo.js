import React from "react";

import "./ModalInfo.css";

const ModalInfo = () => {
  return (
    <div className="modal-info">
      <div className="relative-container">
        <h1>Witaj w mojej Aplikacji Bankowej,</h1>
        <p>
          Zaloguj się używając <strong>dowolnego, wymyślonego loginu</strong><br />
          oraz<br />
          hasła: <strong>0 0 0 0</strong> (cztery zera).
        </p>
        <ul>
          <li>Przewalutuj konto</li>
          <li>Ukryj - Pokaż saldo konta</li>
          <li>Zrób przelew</li>
          <li>Sprawdź kursy walut</li>
          <li>Wylicz kredyt</li>
          <li>Sprawdź lokatę!</li>
        </ul>
        <button>SPRAWDZAM</button>
      </div>
    </div>
  );
};

export default ModalInfo;
