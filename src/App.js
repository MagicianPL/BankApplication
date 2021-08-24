import "./App.css";
import LogInBox from "./components/LogInBox.jsx";
import { inputLogin } from "./components/LogInBox";
import Header from "./components/Header";
import WrapperAnimations from "./components/WrapperAnimations";
import Flex from "./Flex";

function App() {
  return (
    <div className="App">
      <Header />
      <Flex container="flex">
        <LogInBox />
        <WrapperAnimations />
      </Flex>
    </div>
  );
}

export default App;
