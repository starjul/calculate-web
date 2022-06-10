import logo from "./logo.svg";
import "./App.css";
import Input from "./component/input/Input";
import Dropdown from "./component/dropdown/dropdown";

function App() {
  
  return (
    <div className="App">
      <section className="input">
        <Input />
      </section>
      <section className="dropdown">
        <Dropdown />
      </section>
      <section className="result">
        
      </section>
    </div>
  );
}

export default App;
