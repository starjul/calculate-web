import React from "react";

const result = () => {
    const val = document.getElementById("inputNumber").value;
    const selected = document.getElementsByTagName("option");

    function isPrime() {
        // if (val === 2) {
        //     return true;
        // } else if (val > 1) {
        //     for (let i = 2; i < num; i++) {
        //         if (val % i !== 0) {
        //             return true;
        //         } else if (val === i * i) {
        //             return false;
        //         } else {
        //             return false;
        //         }
        //     }
        // } else {
        //     return false;
        // }
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

export default result;
