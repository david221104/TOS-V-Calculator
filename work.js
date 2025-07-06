let first = "";
let operator = "";
let second = "";

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
    return number1/number2;
}

//basic operator function
function operation(first, operator, second) {
    switch(operator) {
        case '+': return add(first, second);
            break;
        case '-': return subtract(first, second);
            break;
        case '*': return multiply(first, second);
            break;
        case '/': return divide(first, second);
    }
}

//event listener that fills the screen
let screen = document.querySelector("#screen");
function numInput(num) {
    let choice = document.querySelectorAll(".number");
    choice.forEach(element => {
        element.addEventListener("click", (e) => {
            let digit = 0;
            let particularNumber = document.createElement('p');
            switch(e.target.id){
                case 'zero': particularNumber.textContent = "0";
                            screen.appendChild(particularNumber);
                            digit = '0';
                    break;
                case 'one':particularNumber.textContent = "1";
                            screen.appendChild(particularNumber);
                            digit = '1';
                    break;
                case 'two':  particularNumber.textContent = "2";
                            screen.appendChild(particularNumber);
                            digit = '2';
                    break;
                case 'three': particularNumber.textContent = "3";
                            screen.appendChild(particularNumber);
                            digit = '3';
                    break;
                case 'four': particularNumber.textContent = "4";
                            screen.appendChild(particularNumber);
                            digit = '4';
                    break;
                case 'five': particularNumber.textContent = "5";
                            screen.appendChild(particularNumber);
                            digit = '5';
                    break;
                case 'six': particularNumber.textContent = "6";
                            screen.appendChild(particularNumber);
                            digit = '6';
                    break;
                case 'seven':particularNumber.textContent = "7";
                            screen.appendChild(particularNumber);
                            digit = '7';
                    break;
                case 'eight':particularNumber.textContent = "8";
                            screen.appendChild(particularNumber);
                            digit = '8';
                    break;
                case 'nine': particularNumber.textContent = "9";
                            screen.appendChild(particularNumber);
                            digit = '9';
                    break;
            }
            num = num + digit;
            console.log(num);
            return num;
        })
    });
}


function operatorFunction() {
    let operatorChoice = document.querySelectorAll(".operator");
    operatorChoice.forEach(element => {
        element.addEventListener("click", (e) => {
            let particularOperator = document.createElement('p');
            switch(e.target.id) {
                case 'divide': particularOperator.textContent = '/';
                               screen.appendChild(particularOperator);
                               operator = '/';
                               break;
                case 'multiply': particularOperator.textContent = '*';
                                 screen.appendChild(particularOperator);
                                 operator = '*';
                                 break;
                case 'subtract' : particularOperator.textContent = '-';
                                  screen.appendChild(particularOperator);
                                  operator = '-';
                                  break;
                case 'add': particularOperator.textContent = '+';
                            screen.appendChild(particularOperator);
                            operator = '+';
                            break;
            }
            numInput(second);
        })
    })
}

