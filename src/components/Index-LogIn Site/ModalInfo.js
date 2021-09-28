import React, {useState} from "react";

import "./ModalInfo.css";

const ModalInfo = () => {
    const [hideModal, setHideModal] = useState({});

  return (
    <div className="modal-info" style={hideModal}>
      <div className="absolute-container">
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
        <button onClick={()=>{
            setHideModal({display: "none"})
        }}>SPRAWDZAM</button>
      </div>
    </div>
  );
};

export default ModalInfo;
