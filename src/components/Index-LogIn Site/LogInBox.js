import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./LogInBox.css";
const LogInBox = ({ setLogin, setShowHomeSite }) => {
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

  /*const [isHidden, setDisplay] = useState(displayHidden);*/
  const [errorLoginIsHidden, setErrorLoginIsHidden] = useState(displayHidden);
  const [errorPassIsHidden, setErrorPassinIsHidden] = useState(displayHidden);
  const [errorCodeIsHidden, setErrorCodeIsHidden] = useState(displayHidden);

  const choosingRandomCode = () => {
    //Fn losuje kod z tablicy
    const randomNumber = Math.floor(Math.random() * codes.length);
    randomCode = codes[randomNumber];
  };

  choosingRandomCode(); //wywołuję funkcję

  const checkLogin = () => {
    if (inputLogin.current.value === "") {
      setErrorLoginIsHidden(displayBlock);
    } else {
      setLogin(inputLogin.current.value);
      setErrorLoginIsHidden(displayHidden);
      return true;
    }
  };

  const checkPassword = () => {
    if (inputPassword.current.value !== "0000") {
      setErrorPassinIsHidden(displayBlock);
    } else {
      setErrorPassinIsHidden(displayHidden);
      return true;
    }
  };

  const checkCode = () => {
    if (inputCode.current.value !== randomCode) {
      setErrorCodeIsHidden(displayBlock);
    } else {
      setErrorCodeIsHidden(displayHidden);
      return true;
    }
  };

  const checkForm = () => {
    checkLogin();
    checkPassword();
    checkCode();

    if (checkLogin() && checkPassword() && checkCode()) {
      setShowHomeSite(false);
    }
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
        <p className="error-login error" style={errorLoginIsHidden}>
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
        <p className="error-password error" style={errorPassIsHidden}>
          Podano złe hasło
        </p>
      </label>
      <p className="code">{randomCode}</p>
      <p>Przepisz powyższy kod:</p>
      <input type="text" ref={inputCode} />
      <p className="error-code error" style={errorCodeIsHidden}>
        Podano zły kod
      </p>
      <button onClick={checkForm}>Zaloguj</button>
    </div>
  );
};

export default LogInBox;
