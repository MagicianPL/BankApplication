import React, { useEffect, useState } from "react";

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

  const toggleBalance = () => {
isVisible.visibility === "visible" ? setIsVisible({visibility: "hidden"}) : setIsVisible({visibility: "visible"});

isVisible.visibility === "visible" ? setButtonText("Pokaż saldo") : setButtonText("Ukryj saldo")
  };

  useEffect(()=>{
    console.log("rendered")
    console.log(isVisible.visibility)
  })

  const convert = () => {
    const amount = (accountBalance / props.euro).toFixed(2);
    setAccountBalance(amount);
    setIsPln(!isPln);
  }

  return (
    <div className="account">
      <h2>
        <button className="hide" onClick={toggleBalance}>
          {buttonText}
        </button>
        <span style={isVisible}>SALDO: {accountBalance.toLocaleString()} {isPln ? "zł" : "eur"}</span>{" "}
        <button className="conversion" onClick={convert}>Przewalutuj na euro</button>
      </h2>

      <h3>00 2847 2049 0483 0000 9304</h3>
      <div className="actions">
        <button>Zrób przelew</button>
        <button>Historia</button>
      </div>
    </div>
  );
};

export default Account;
