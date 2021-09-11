import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./LogInBox.css";
const LogInBox = () => {
  let randomCode; //przypiszę tutaj losowy kod z tablicy, będzie wyświetlony w boxie
  const codes = ["Gsj38Fq", "du5fP", "372yZ", "75cT74", "1bQ7dTG"];

  const inputLogin = useRef(null); //pobieram trzy inputy (ustawiam referencje)
  const inputPassword = useRef(null);
  const inputCode = useRef(null);

  const displayHidden = {
    visibility: "hidden",
  };

  const displayBlock = {
    visibility: "visible",
  };

  const [isHidden, setDisplay] = useState(displayHidden);

  const choosingRandomCode = () => {
    //Fn losuje kod z tablicy
    const randomNumber = Math.floor(Math.random() * codes.length);
    randomCode = codes[randomNumber];
  };

  choosingRandomCode(); //wywołuję funkcję

  const checkForm = () => {
    if (
      inputLogin.current.value === "" ||
      inputPassword.current.value === "" ||
      inputCode.current.value === ""
    ) {
      setDisplay(displayBlock);
    }

    inputLogin.current.value = "";
    inputPassword.current.value = "";
    inputCode.current.value = "";
  };

  return (
    <div className="LogInBox">
      <label>
        Wpisz login:
        <input
          type="text"
          className="login"
          placeholder="Login"
          ref={inputLogin}
        />
        <p className="error-login error" style={isHidden}>
          Podano zły login
        </p>
      </label>

      <label>
        Wpisz hasło:
        <input
          type="password"
          placeholder="Hasło"
          className="password"
          ref={inputPassword}
        />
        <p className="error-password error" style={isHidden}>
          Podano złe hasło
        </p>
      </label>
      <p className="code">{randomCode}</p>
      <p>Przepisz powyższy kod:</p>
      <input type="text" ref={inputCode} />
      <p className="error-code error" style={isHidden}>
        Podano zły kod
      </p>
      <button onClick={checkForm}>Zaloguj</button>
    </div>
  );
};

export default LogInBox;
