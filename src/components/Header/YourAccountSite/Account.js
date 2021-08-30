import React from "react";

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

const Account = () => {
  return (
    <div className="account">
      <h2>
        SALDO: 15 000 zł <button>Przewalutuj na euro</button>
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
