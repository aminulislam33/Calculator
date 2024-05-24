let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "AC") {
            // Clear all inputs and reset the calculator
            currentInput = '';
            operator = '';
            firstOperand = null;
            display.value = '';
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            // Handle operator buttons
            if (firstOperand === null) {
                // If no first operand, set it to the current input
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            } else {
                // If there's already a first operand, perform the calculation
                firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
                operator = value;
                currentInput = '';
                display.value = firstOperand;
            }
        } else if (value === '=') {
            // Handle the equals button
            if (operator && firstOperand !== null) {
                display.value = calculate(firstOperand, parseFloat(currentInput), operator);
                currentInput = display.value;
                firstOperand = null;
                operator = '';
            }
        } else {
            // Handle number and decimal point buttons
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return operand2;
    }
}
