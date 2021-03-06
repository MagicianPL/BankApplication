import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import "./CalculateCredit.css";

const CalculateCredit = () => {
  const [showInstallmentInfo, setShowInstallmentInfo] = useState(false);
  const [showErrorInfo, setShowErrorInfo] =
    useState(false); /*This is error div for inputs validation*/
  const [creditValue, setCreditValue] = useState("10000");
  const [years, setYears] = useState("10");
  const [months, setMonths] = useState("6");
  const [installment, setInstallment] = useState(null);
  const isValid = /^\d+$/;
  /*const isValid = /^([1-9])$/;*/

  const calculating = () => {
    const percentages = (0.065 * parseInt(creditValue)) / 12;

    //if we have number on years and months inputs
    if (months && years) {
      setInstallment(
        parseInt(creditValue) / (parseFloat(years) * 12 + parseFloat(months)) +
          percentages
      );
      //This is value of credit installment
      //only months
    } else if (months) {
      setInstallment(parseInt(creditValue) / parseFloat(months) + percentages);
      //This is value of credit installment

      //only years
    } else {
      setInstallment(
        parseInt(creditValue) / (parseFloat(years) * 12) + percentages
      );
      //This is value of credit installment
    }

    setShowInstallmentInfo(true);
  };

  const inputsValidation = () => {
    if (!creditValue || !isValid.test(creditValue) || creditValue === "0") {
      setShowErrorInfo(true);
    } else if (!years && !months) {
      setShowErrorInfo(true);
    } else if (years && months) {
      if (years === "0" && months === "0") {
        setShowErrorInfo(true);
      } else if (!isValid.test(years) || !isValid.test(months)) {
        setShowErrorInfo(true);
      } else {
        setShowErrorInfo(false);
        calculating();
      }
    } else if (years) {
      if (isValid.test(years)) {
        setShowErrorInfo(false);
        calculating();
      } else {
        setShowErrorInfo(true);
      }
    } else if (months) {
      if (!isValid.test(months)) {
        setShowErrorInfo(true);
      } else {
        setShowErrorInfo(false);
        calculating();
      }
    }
  };

  return (
    <section id="credit">
      <h2>
        Spe??nij <span>MARZENIA</span> z kredytem got??wkowym w Banku u Skrud??a
      </h2>
      <p>
        Najlepszy mo??liwy wyb??r - oprocentowanie to tylko <span>6.5%</span> w
        skali roku!
      </p>
      <p>
        Wybierz kwot?? po??yczki oraz czas sp??aty, a my wyliczymy Twoj?? rat??
        kredytu
      </p>
      <div className="input-section">
        <p>
          Kwota po??yczki:{" "}
          <input
            type="number"
            min="100"
            value={creditValue}
            onChange={(e) => {
              setCreditValue(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />
          <span className="info">
            (Wpisz pe??n?? kwot?? bez znak??w kropki czy przecinka)
          </span>
        </p>
        <p>
          Chc?? wzi???? kredyt na{"\u00A0"}
          <input
            type="number"
            min="0"
            value={years}
            onChange={(e) => {
              setYears(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />
          {"\u00A0"}lat i{"\u00A0"}
          <input
            type="number"
            min="0"
            value={months}
            onChange={(e) => {
              setMonths(e.target.value);
              setShowInstallmentInfo(false);
            }}
          />{" "}
          {"\u00A0"}miesi??cy
        </p>
      </div>

      {showInstallmentInfo ? (
        <div className="installment-info">
          Je??li przyznamy Ci {creditValue} z??otych kredytu na{" "}
          {years ? `${years} lat` : null}
          {years && months ? " i " : null}
          {months ? `${months} miesi??cy` : null}, Twoja rata b??dzie wynosi??a
          tylko {installment.toFixed(2)} z??otych miesi??cznie
        </div>
      ) : null}
      {showErrorInfo ? (
        <div className="error-info">B????dnie wype??nione pola!</div>
      ) : null}
      <button onClick={inputsValidation}>
        <FontAwesomeIcon icon={faRedo} />
        PRZELICZ
      </button>
    </section>
  );
};

export default CalculateCredit;
