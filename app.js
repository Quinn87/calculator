function add (numOne, numTwo){
    return numOne + numTwo;
}

function subtract (numOne, numTwo){
    return numOne - numTwo;
}

function multiply (numOne, numTwo){
    return numOne * numTwo;
}

function divide (numOne, numTwo){
    return numOne / numTwo;
}

let numOne = "";
let numTwo = "";
let operator = "";

const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const screenText = document.querySelector('.screenText');

numButtons.forEach(button => button.addEventListener('click', function (e) {
    console.log(e.target.textContent);
    numOne += e.target.textContent;
    screenText.innerText = `${numOne}`;
    return numOne 
}));