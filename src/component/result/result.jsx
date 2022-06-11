import React from "react";

const Result = () => {
    const val = Number(document.getElementById("inputNumber"));
    const selected = document.getElementsByTagName("option");
    console.log("val",val)

    function isPrime() {
        if (val === 2) {
            return true;
        } else if (val > 1) {
            for (let i = 2; i < i +1; i++) {
                if (val % i !== 0) {
                    return true;
                } else if (val === i * i) {
                    return false;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
        return true
    }
    console.log(isPrime())

    if (selected === "isPrime") {
        return document.getElementById("test").innerHTML = isPrime(val);
    } else if (selected === "isFibonacci") {
        return 
    }

    return <div id="test"></div>;
};

export default Result;
