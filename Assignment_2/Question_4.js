//Write a function to perform this. You are given two numbers n1 and n2. 
//You need to find the sum of the products of their corresponding digits. 
//So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(a, b) {
    let sum = 0;

    // Run loop until both numbers become 0
    while (a > 0 || b > 0) {

        // Get last digit of both numbers
        let digit1 = a % 10;   // e.g., 34 -> 4
        let digit2 = b % 10;   // e.g., 6 -> 6

        // Multiply digits and add to sum
        sum += digit1 * digit2;

        // Remove last digit from both numbers
        a = Math.floor(a / 10);  // 34 -> 3
        b = Math.floor(b / 10);  // 6 -> 0
    }

    return sum;
}

console.log("\nQ4: Sum of Product of Digits");
console.log("Result (6, 34):", sumOfProducts(6, 34));
console.log("Result (123, 456):", sumOfProducts(123, 456));