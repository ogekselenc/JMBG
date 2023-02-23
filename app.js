import {generateJMBG}  from "./JMBG.js";


const numbersSpace = document.getElementById("numbersSpace");
const generateButton = document.getElementById("generateJMBG");
let newNumbers = [];
generateButton.addEventListener("click", () => {
        newNumbers = generateJMBG();
});

numbersSpace.innerHTML = newNumbers;
//numbers.join("");

