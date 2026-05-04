//Write a function to calculate which can add, subtract, multiply and divide two numbers. 
//Use switch inside function.

console.log("\nQ2: Calculator");
function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operation";
    }
}

console.log("Addition:", calculate(10, 5, '+'));
console.log("Subtraction:", calculate(10, 5, '-'));
console.log("Multiplication:", calculate(10, 5, '*'));
console.log("Division:", calculate(10, 5, '/'));