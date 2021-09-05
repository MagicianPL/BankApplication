import React, { useEffect, useState } from "react";
import MessageModal from "./MessageModal";

const historyActions = [
  {
    title: "Żabka - artykuły spożywcze",
    amount: 18.72,
    income: false,
    date: new Date(2021, 8, 1),
  },
  {
    title: "Hebe - sklep kosmetyczny",
    amount: 247.5,
    income: false,
    date: new Date(2021, 8, 1),
  },
  {
    title: "McDonald",
    amount: 32.38,
    income: false,
    date: new Date(2021, 7, 17),
  },
  {
    title: "Przelew wychodzący do Marian Jarząbek",
    amount: 300,
    income: false,
    date: new Date(2021, 7, 16),
  },
  {
    title: "Przelew przychodzący",
    amount: 1000,
    income: true,
    date: new Date(2021, 7, 16),
  },
];

const Account = (props) => {
  const [accountBalance, setAccountBalance] = useState(15000);
  const [isPln, setIsPln] = useState(true);
  const [isVisible, setIsVisible] = useState({ visibility: "visible" });
  const [buttonText, setButtonText] = useState("Ukryj saldo");
  const [convertButtonText, setConvertButtonText] = useState(true);
  const [modalIsHidden, setModalIsHidden] = useState(true);

  const toggleModal = (boolean) => {
    setModalIsHidden(boolean);
  };

  const toggleBalance = () => {
    isVisible.visibility === "visible"
      ? setIsVisible({ visibility: "hidden" })
      : setIsVisible({ visibility: "visible" });

    isVisible.visibility === "visible"
      ? setButtonText("Pokaż saldo")
      : setButtonText("Ukryj saldo");
  };

  useEffect(() => {
    console.log("rendered");
    console.log(isVisible.visibility);
  });

  const convert = () => {
    if (isPln) {
      const amount = (accountBalance / props.euro - 5).toFixed(2);
      setAccountBalance(amount);
      setIsPln(!isPln);
      setConvertButtonText(!convertButtonText);
      setModalIsHidden(true);
    } else {
      const amount = (accountBalance * props.euro).toFixed(2);
      setAccountBalance(amount);
      setIsPln(!isPln);
      setConvertButtonText(!convertButtonText);
    }
  };

  const decrease = () => {
    console.log(accountBalance - 1756.26);
  };

  return (
    <div className="account">
      <h2>
        <button className="hide" onClick={toggleBalance}>
          {buttonText}
        </button>
        <span style={isVisible}>
          SALDO: {accountBalance.toLocaleString()} {isPln ? "PLN" : "EUR"}
        </span>{" "}
        <button
          className="conversion"
          onClick={isPln ? () => setModalIsHidden(false) : convert}
        >
          {convertButtonText ? "Przewalutuj na euro" : "Przewalutuj na PLN"}
        </button>
      </h2>

      <h3>00 2847 2049 0483 0000 9304</h3>
      <div className="actions">
        <button onClick={decrease}>Zrób przelew</button>
        <button>Historia</button>
      </div>
      <MessageModal
        variable={modalIsHidden}
        function={toggleModal}
        convert={convert}
      />
    </div>
  );
};

export default Account;
