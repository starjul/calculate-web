import React from "react";

const number = Number (document.getElementById("inputNumber").value);
console.log("iii",number)
const num = () => {
    switch(number){
        case number >= 0:
            return Math.round(number);
        case number < 0:
            return 1
    }
  console.log("www",number);
}




const Input = () => {
  return (
    <div>
      <input id="inputNumber" type="number" onKeyPress={() => num(number)} />
    </div>
  );
};

export default Input;
