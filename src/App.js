import "./App.css";
import LogInBox from "./components/LogInBox.jsx";
import { inputLogin } from "./components/LogInBox";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <LogInBox />
    </div>
  );
}

export default App;
