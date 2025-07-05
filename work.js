let first, operator, second;

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

