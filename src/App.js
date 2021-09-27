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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [userLogin, setUserLogin] = useState("Nieznajomy");
  const [showHomeSite, setShowHomeSite] = useState(true);

  return (
    <div className="App">
      {showHomeSite ? (
        <>
          <Header />
          <Flex container="flex" className="container-home-site">
            <LogInBox
              setLogin={(login) => {
                setUserLogin(login);
              }}
              setShowHomeSite={setShowHomeSite}
            />
            <WrapperAnimations />
          </Flex>{" "}
        </>
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/" exact>
                <YourAccountSite login={userLogin}/>
              </Route>

              <Route path="/deposit">
                <DepositSite login={userLogin}/>
                </Route>        
                <Route path="/cryptocurrencies">
                  <CryptoCurrenciesSite />
                   </Route>
              <Route path="/about">

                <About />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
