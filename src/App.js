import { useState } from "react";
import "./App.css";
import Input from "./component/input/Input";
import Dropdown from "./component/dropdown/dropdown";
import Result from "./component/result/result";

function App() {
  const [calType, setCalType] = useState('')
  
  return (
    <div className="App">
      <section className="input">
        <Input />
      </section>
      <section className="dropdown">
        <Dropdown />
      </section>
      <section className="result">
        <Result  />
        
      </section>
    </div>
  );
}

export default App;
