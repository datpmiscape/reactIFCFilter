import logo from "./logo.svg";
import "./App.scss";
import SelectFile from "./Home/SelectFile";
import ProcessFile from "./Home/ProcessFile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SelectFile />
        <ProcessFile />
      </header>
    </div>
  );
}

export default App;
