import { useState, useEffect } from "react";
import "./App.css";
import Input from "./component/input/Input";
import Dropdown from "./component/dropdown/dropdown";
import Result from "./component/result/result";

function App() {
  const [typeSelected, setTypeSelected] = useState("isPrime");
  const [data, setData] = useState("");

  useEffect(() => {}, [typeSelected, data]);

  const handleChangeNumber = (e) => {
    let x = e.target.value;
    let y = Number(x);
    let z = Number(1)
    

    if (x.length > 0) {
      setTimeout(() => {
        if (y > 0) {
          setData(Math.round(y));
        } else if (y < 0) {
          setData(z);
        } else {
          setData(null);
        }
        console.log("x&z", x, z);
      }, 1000);
    }
  };

  const handleChangeType = (e) => {
    let type = e.target.value;
    setTypeSelected(type);
  };

  return (
    <div className="App">
      <section className="input">
        <Input handleChange={handleChangeNumber} />
      </section>
      <section className="dropdown">
        <Dropdown handleChangeType={handleChangeType} />
      </section>
      <section className="result">
        <Result value={data} typeSelected={typeSelected} />
      </section>
    </div>
  );
}

export default App;
