// DOM elements
const buttons = document.getElementsByTagName('button');
const calculations = document.getElementById('calculations');
const currentNumber = document.getElementById('current-number');
const calculate = document.getElementById('calculate');
const numbers = document.querySelectorAll('numbers');
const clearBtn = document.getElementById('clear');

// Set initial values
let display = "";
let currentNum = 0.0;
let total = "empty";
let globalOperator = "empty";

function updateDisplay() {
    currentNumber.innerHTML = display;
} 

clearBtn.addEventListener('click', () => {
    display = "";
    currentNum = 0.0;
    total = "empty";
    globalOperator = "empty";
    updateDisplay();
})

function getNum() {
    button.addEventListener('click', e => {
        display += e.target.innerHTML;
        console.log(display);
        updateDisplay();
        })
}

function getOperator() {
    button.addEventListener('click', e => {
        localOperator = e.target.id;
        console.log(localOperator);
        // Saves previously entered number into currentNum
        currentNum = parseFloat(currentNumber.innerHTML);
        console.log(currentNum, total);

        if (total == "empty") {
            total = currentNum;
            globalOperator = localOperator;
        } else {
            total = operate(globalOperator, total, currentNum);
            globalOperator = localOperator;
        }
        console.log(total);
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

calculate.addEventListener('click', () => {
    currentNumber.innerHTML = operate(globalOperator, total, currentNum);
})


// if number pressed, show number on screen and calc line
// if mult numbers pressed, should add on afterwards
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


