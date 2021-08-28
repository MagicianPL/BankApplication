import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newPerson = {
      name: name,
      email: email,
    };

    setPeople((prevState) => {
      return [newPerson, ...prevState];
    });
  };

  return (
    <>
      <form>
        <label htmlFor="name">Imię:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        ></input>
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={submitHandler}>
          WYŚLIJ
        </button>
        <button onClick={()=>{setPeople([])}}>CZYŚĆ</button>
      </form>
      {people.map((person) => {
        const { name, email } = person;
        return (
          <>
            <h2>{name}</h2>
            <h2>{email}</h2>
          </>
        );
      })}
    </>
  );
};

export default Test;
