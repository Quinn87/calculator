function add(numOne, numTwo) {
    return parseInt(numOne) + parseInt(numTwo);
}

function subtract(numOne, numTwo) {
    return parseInt(numOne) - parseInt(numTwo);
}

function multiply(numOne, numTwo) {
    return parseInt(numOne) * parseInt(numTwo);
}

function division(numOne, numTwo) {
    return parseInt(numOne) / parseInt(numTwo);
}

let numOne = "";
let numTwo = "";
let operator = "";
let answer = "";

const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('#clear');
const screenCalculation = document.querySelector('.screenCalculation');
const screenText = document.querySelector('.screenText');
const plus = document.querySelector('#add')
const minus = document.querySelector('#subtract')
const times = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

numButtons.forEach(button => button.addEventListener('click', function (e) {
    console.log(e.target.textContent);
    if (operator === "") {
        numOne += e.target.textContent;
        screenText.innerText = numOne;
    }
    else {
        numTwo += e.target.textContent;
        screenText.innerText = numTwo;
    }
}));

operatorButtons.forEach(button => button.addEventListener('click', function (e) {
    operator = e.target.textContent;
    screenCalculation.innerText = `${numOne} ${operator}`;
}));

equalsButton.addEventListener('click', function () {
    screenCalculation.innerText = `${numOne} ${operator} ${numTwo} =`;
    switch (operator) {
        case plus.innerText:
            answer = add(numOne, numTwo);
            screenText.innerText = answer;
            numOne = answer;
            numTwo = "";
            break;
        case minus.innerText:
            answer = subtract(numOne, numTwo);
            screenText.innerText = answer;
            numOne = answer;
            numTwo = "";
            break;
        case times.innerText:
            answer = multiply(numOne, numTwo);
            screenText.innerText = answer;
            numOne = answer;
            numTwo = "";
            break;
        case divide.innerText:
            answer = division(numOne, numTwo);
            screenText.innerText = answer;
            numOne = answer;
            numTwo = "";
            break;
    }

});

clearButton.addEventListener('click', function (){
    screenText.innerText = "";
    numOne = "";
    numTwo = "";
    operator = "";
    screenCalculation.innerText = "";
});