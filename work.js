let first = "";
let operator = "";
let second = "";
let isClicked = false; //checks if an operator is pressed or not
let currentOperator = null;

//basic math
function add(number1, number2) { 
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
} 
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if(number2 === 0) return "Error"; // if dividing with 0
    return number1 / number2;
}

//basic operator function
function operation(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);
    switch(operator) {
        case '+': return add(first, second);
        case '-': return subtract(first, second);
        case '*': return multiply(first, second);
        case '/': return divide(first, second);
    }
}

let screen = document.querySelector("#screen");
//a function that checks which button is pressed, and if an operator is pressed
function numInput() {
    let choice = document.querySelectorAll(".number");
    choice.forEach(element => {
        element.addEventListener("click", (e) => {
            let digit = '';
            let particularNumber = document.createElement('p');
            switch(e.target.id){
                case 'zero': particularNumber.textContent = "0";
                            digit = '0';
                    break;
                case 'one':particularNumber.textContent = "1";
                            digit = '1';
                    break;
                case 'two':  particularNumber.textContent = "2";
                            digit = '2';
                    break;
                case 'three': particularNumber.textContent = "3";
                            digit = '3';
                    break;
                case 'four': particularNumber.textContent = "4";
                            digit = '4';
                    break;
                case 'five': particularNumber.textContent = "5";
                            digit = '5';
                    break;
                case 'six': particularNumber.textContent = "6";
                            digit = '6';
                    break;
                case 'seven':particularNumber.textContent = "7";
                            digit = '7';
                    break;
                case 'eight':particularNumber.textContent = "8";
                            digit = '8';
                    break;
                case 'nine': particularNumber.textContent = "9";
                            digit = '9';
                    break;

            }
            screen.appendChild(particularNumber);
            //asks if the operator is pressed
            if(!isClicked) {
                first += digit;
            }
            else { 
                second += digit;
            }
            disableOperator();
            console.log(`This is first:${first}, and this is second:${second}`);
        })
    });
}

//operator function, which checks if the operator is clicked, if so then it will result in the numInput(); function to assign the value to the variable second
function operatorFunction() {
    let operatorChoice = document.querySelectorAll(".operator");
    operatorChoice.forEach(element => {
        element.addEventListener("click", (e) => {
            isClicked = true; //operator already clicked, following are the reset method and the switch statement
            if(first === '') return;
            if(currentOperator) {currentOperator.remove();}
            let particularOperator = document.createElement('p');
            switch(e.target.id) {
                case 'divide': particularOperator.textContent = '/';
                               operator = '/';
                               break;
                case 'multiply': particularOperator.textContent = '*';
                                 operator = '*';
                                 break;
                case 'subtract' : particularOperator.textContent = '-';
                                  operator = '-';
                                  break;
                case 'add': particularOperator.textContent = '+';
                            operator = '+';
                            break;
            }
            screen.appendChild(particularOperator);
            currentOperator = particularOperator;
            console.log(`Operator: ${operator}`);
            isClicked = false;
        })
    })
}

function disableOperator() {
    let operatorButton = document.querySelectorAll(".operator");
    operatorButton.forEach(element => {
        element.disabled = first === ''; //disable element if first is empty
    })
}

function equals() {
    let equaling = document.querySelector('#equals');
    equaling.addEventListener('click', () => {
        if(first !== '' && operator !== '' && second !== '') {
            while(screen.firstChild) {
                screen.removeChild(screen.firstChild);
            }
            let result = operation(first, operator, second);
            let resultElement = document.createElement('p');
            resultElement.textContent = result;
            screen.appendChild(resultElement);
            first = result.toString();
            console.log(first);
            operator = '';
            second = '';
            currentOperator = null;
            disableOperator();
            console.log(`Result: ${first}`);
        }
    });
}

function clear() {
    let clearing = document.querySelector('#ac');
    clearing.addEventListener('click', () => {
        first = '';
        second = '';
        operator = '';
        isClicked = false;
        screen.textContent = '';
        currentOperator = null;
        while(screen.firstChild) {
            screen.removeChild(screen.firstChild);
        }
        disableOperator();
    });
}

function workingHours(){
    numInput();
    operatorFunction();
    equals();
    clear();
    disableOperator();
}

workingHours();