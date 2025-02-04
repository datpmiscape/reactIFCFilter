import logo from "./logo.svg";
import "./App.scss";
import IFCFilter from "./IFCFilter/IFCFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IFCFilter />
      </header>
    </div>
  );
}

export default App;
