// Input values and operator
const num1 = 10;
const num2 = 5;
const operator = "+"; // Try changing to "-", "*", or "/"

let result;

// Evaluate the operation using a switch case
switch (operator) {
    case "+":
        result = num1 + num2;
        console.log("Result: " + result);
        break;

    case "-":
        result = num1 - num2;
        console.log("Result: " + result);
        break;

    case "*":
        result = num1 * num2;
        console.log("Result: " + result);
        break;

    case "/":
        result = num1 / num2;
        console.log("Result: " + result);
        break;

    default:
        console.log("Invalid operator");
        break;
}
