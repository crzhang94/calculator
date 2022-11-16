// DOM elements
const buttons = document.getElementsByTagName('button');
const calculations = document.getElementById('calculations');
const currentNumber = document.getElementById('current-number')
const numbers = document.querySelectorAll('numbers');;
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');


// TODO
// Fix decimal button so its disabled after hitting once
// Set up DEL button
// Add display for calculation line

let display = "";
let currentNum = 0.0;
let total = "empty";
let globalOperator = "empty";

function updateDisplay() {
    currentNumber.innerHTML = display;
} 

function getNum() {
    button.addEventListener('click', e => {
        display += e.target.innerHTML;
        updateDisplay();
        currentNum = parseFloat(currentNumber.innerHTML);
        })
}

function getOperator() {
    button.addEventListener('click', e => {
        localOperator = e.target.id;
        if (total == "empty") {
            total = currentNum;
            globalOperator = localOperator;
        } else {
            total = operate(globalOperator, total, currentNum);
            globalOperator = localOperator;
        }
        currentNumber.innerHTML = total;
        display = "";
    })
}

for (button of buttons) {
    // Make entered numbers show up on current number display
    if (button.classList.contains("numbers") == true) {
        getNum();
    }
    // If operator hit, performs calculation on preceding and following number
    if (button.classList.contains("operator") == true) {
        getOperator();
    }
}

equalsBtn.addEventListener('click', () => {
    currentNumber.innerHTML = operate(globalOperator, total, currentNum);
})

clearBtn.addEventListener('click', () => {
    display = "";
    currentNum = 0.0;
    total = "empty";
    globalOperator = "empty";
    updateDisplay();
})


// if number pressed, show number on screen and calc line
// operand applied, should keep old number on but show 8 * on calc line
// second number pressed, should show on screen and show whole equation on line
    

// Math functions
function operate(operator, num1, num2) {
    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


