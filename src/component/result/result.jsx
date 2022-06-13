import React, { useState, useEffect } from "react";

const Result = ({ value, typeSelected }) => {
  const [result, setResult] = useState(false);

  function isPrime(value) {
    if (value === 1) {
      return false;
    } else if (value === 2) {
      return true;
    } else {
      for (let i = 2; i < value; i++) {
        if (value % i === 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }

  function isFibonacci(value) {
    if (value === 1 || value === 2) {
      return true;
    } else if (value > 1) {
      let fibo = [1, 1, 2];
      for (let i = 1; i < value; i++) {
        let x = fibo[i] + fibo[i + 1];
        fibo.push(x);
      }
      const found = fibo.find((element) => element === value);
      if (found) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (typeSelected === "isPrime") {
      setResult(isPrime(value));
    } else if (typeSelected === "isFibonacci") {
      setResult(isFibonacci(value));
    }
  }, [typeSelected, value]);

  return (
    <>
      <h4>Result</h4>
      <div id="test">{result?.toString()}</div>
    </>
  );
};

export default Result;
