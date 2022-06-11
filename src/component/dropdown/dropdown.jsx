import React from "react";

const Dropdown = () => {
  return (
    <div>
      <h4>Select function</h4>
      <select name="calculation" id="calType">
        <option value="isPrime" id="isPrime">isPrime</option>
        <option value="isFibonacci" id="isFibonacci">isFibonacci</option>
      </select>
    </div>
  );
};

export default Dropdown;
