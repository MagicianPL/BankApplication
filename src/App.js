import "./App.css";
import LogInBox from "./components/Index-LogIn Site/LogInBox";
import Header from "./components/Header/Header";
import WrapperAnimations from "./components/Index-LogIn Site/WrapperAnimations";
import Flex from "./Flex";
import Test from "./components/Test";
import YourAccountSite from "./components/YourAccountSite/YourAccountSite";
import { useState } from "react";

function App() {
  const [userLogin, setUserLogin] = useState("Nieznajomy");

  return (
    <div className="App">
      <Header />
      <Flex container="flex">
        <LogInBox
          setLogin={(login) => {
            setUserLogin(login);
          }}
        />
        <WrapperAnimations />
      </Flex>
      <YourAccountSite login={userLogin} />
    </div>
  );
}

export default App;
