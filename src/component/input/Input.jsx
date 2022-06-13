// import React, { useState} from "react";
import React from "react";

const Input = ({ data, handleChange }) => {
  // const [data, setData] = useState("");

  // const handleChange = (e) => {
  //   let x = e.target.value;
  //   let y = Number(x);

  //   if (x.length > 0) {
  //     setTimeout(() => {
  //       if (y > 0) {
  //         setData(Math.round(x));
  //       } else if (y < 0) {
  //         setData(1);
  //       } else {
  //         setData(null);
  //       }
  //       console.log("x", x);
  //     }, 1000);
  //   }
  // };

  return (
    <div>
      <h4>Put the number</h4>
      <input
        id="inputNumber"
        type="text"
        value={data}
        onChange={handleChange}
        pattern="[0-9]"
      />
    </div>
  );
};

export default Input;
