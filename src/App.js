import "./App.css";
import LogInBox from "./components/Index-LogIn Site/LogInBox.jsx";
import { inputLogin } from "./components/Index-LogIn Site/LogInBox";
import Header from "./components/Header/Header";
import WrapperAnimations from "./components/Index-LogIn Site/WrapperAnimations";
import Flex from "./Flex";
import Test from "./components/Test";
import YourAccountSite from "./components/Header/YourAccountSite/YourAccountSite";

function App() {
  return (
    <div className="App">
      {/*<Header />
      <Flex container="flex">
        <LogInBox />
        <WrapperAnimations />
      </Flex>*/}
      <YourAccountSite />
    </div>
  );
}

export default App;
