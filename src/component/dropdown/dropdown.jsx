import React from "react";

const Dropdown = () => {
  return (
    <div>
      <select name="calculation" id="calType">
        <option value="isPrime" id="isPrime">isPrime</option>
        <option value="isFibonacci" id="isFibonacci">isFibonacci</option>
      </select>
    </div>
  );
};

export default Dropdown;
