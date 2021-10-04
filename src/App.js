import "./App.css";
import LogInBox from "./components/Index-LogIn Site/LogInBox";
import Header from "./components/Header/Header";
import WrapperAnimations from "./components/Index-LogIn Site/WrapperAnimations";
import Flex from "./Flex";
import Nav from "./components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import YourAccountSite from "./components/YourAccountSite/YourAccountSite";
import CalculateCredit from "./components/YourAccountSite/CalculateCredit";
import DepositSite from "./components/DepositSite/DepositSite";
import { useState } from "react";
import About from "./components/About/About";
import BankTransfer from "./components/BankTransfer/BankTransfer";
import ModalInfo from "./components/Index-LogIn Site/ModalInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Array of objects - each object has transaction data for history of transactions
// It's passed via props to YourAccountSite
const history = [
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
    amount: 15598.6,
    income: true,
    date: new Date(2021, 7, 16),
  },
];

function App() {
  /*States on higher level (above router) - it won't be resetting when the adress is changed (router) */
  const [userLogin, setUserLogin] = useState("Nieznajomy");
  const [showHomeSite, setShowHomeSite] = useState(true);
  /* If showHomeSite is true - LogIn site is rendering - otherwise accountSite */

  const [accountBalance, setAccountBalance] = useState(15000);
  const [historyTransactions, setHistoryTransactions] = useState(history); //just history
  const [isPln, setIsPln] = useState(true); //It checks if currency on account is PLN or Euro

  return (
    <div className="App">
      {showHomeSite ? (
        <>
          <Header />
          <Flex container="flex" className="container-home-site">
            <ModalInfo />
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
        <Router basename="/BankApplication">
          <div className="top-bar">
            <p>
              {<FontAwesomeIcon icon={faCog} />}Witaj, {userLogin}
            </p>
            <Nav />
          </div>

          <Switch>
            <Route path="/" exact>
              <YourAccountSite
                login={userLogin}
                historyTransactions={historyTransactions}
                setHistoryTransactions={setHistoryTransactions}
                accountBalance={accountBalance}
                setAccountBalance={setAccountBalance}
                isPln={isPln}
                setIsPln={setIsPln}
              />
            </Route>
            <Route path="/credit">
              <CalculateCredit />
            </Route>

            <Route path="/deposit">
              <DepositSite login={userLogin} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/transfer">
              <BankTransfer
                history={historyTransactions}
                setHistory={setHistoryTransactions}
                balance={accountBalance}
                setBalance={setAccountBalance}
                isPln={isPln}
              />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
