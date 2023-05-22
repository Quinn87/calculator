function add(numOne, numTwo, screenText) {
    let answer = numOne + numTwo;
    return answer;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

let numOne = "";
let numTwo = "";
let operator = "";

const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equalsButton = document.querySelector('.equals');
const screenCalculation = document.querySelector('.screenCalculation');
const screenText = document.querySelector('.screenText');

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

equalsButton.addEventListener('click', function (numOne, numTwo) {
    screenCalculation.innerText = `${numOne} ${operator} ${numTwo} =`;
    switch (operator) {
        case '+':
            add(numOne,numTwo,screenText);
            break;
    }
    
});