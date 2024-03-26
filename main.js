"use strict";
//   Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
//Repeating a number and string by adding number and 
function addNumberAndString(number1, numberString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}
// Trying it with 32 and "90"
console.log(addNumberAndString(32, "90"));
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values. Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
// This function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(8.93, 2.30)); // Shows 0.02
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
console.log(divideAndRemainder(23, 3));
