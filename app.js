import {generateJMBG, numbers }  from "./JMBG.js";

const numbersSpace = document.getElementById("numbersSpace");
const generateButton = document.getElementById("generateJMBG");

generateButton.addEventListener("click", () => {
        generateJMBG();
        numbersSpace.innerHTML = numbers.join("");
});