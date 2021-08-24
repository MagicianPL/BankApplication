import logo from "./logo.svg";
import "./App.css";
import Booklist from "./components/Booklist.jsx";
import LogInBox from "./components/LogInBox.jsx";
import { inputLogin } from "./components/LogInBox";
import Header from "./components/Header";
import One from "./components/One";

function App() {
  const zmienna = "Bla bla bla bla";
  return (
    <div className="App">
      {/* <Booklist />*/}
      <One zmienna={zmienna} />
      <Header />
      <LogInBox />
    </div>
  );
}

export default App;
