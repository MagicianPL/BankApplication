import "./App.css";
import LogInBox from "./components/Index-LogIn Site/LogInBox";
import Header from "./components/Header/Header";
import WrapperAnimations from "./components/Index-LogIn Site/WrapperAnimations";
import Flex from "./Flex";
import Test from "./components/Test";
import YourAccountSite from "./components/YourAccountSite/YourAccountSite";
import DepositSite from "./components/DepositSite/DepositSite";
import { useState } from "react";
import CryptoCurrenciesSite from "./components/CryptoCurrenciesSite/CryptoCurrenciesSite";
import About from "./components/About/About";
import BankTransfer from "./components/BankTransfer/BankTransfer";

function App() {
  const [userLogin, setUserLogin] = useState("Nieznajomy");

  return (
    <div className="App">
      <Header />
      <Flex container="flex" className="container-home-site">
        <LogInBox
          setLogin={(login) => {
            setUserLogin(login);
          }}
        />
        <WrapperAnimations />
      </Flex>
      <YourAccountSite login={userLogin} />
      <DepositSite login={userLogin} />
      <CryptoCurrenciesSite />
      <About />
    </div>
  );
}

export default App;
