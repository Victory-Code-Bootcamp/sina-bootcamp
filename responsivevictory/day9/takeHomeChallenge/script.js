// Challenge 1:
// Write a function that takes two numbers as parameters and returns the larger one.
function bigNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
        else {
            return num2;
        }
    }
}
console.log(bigNumber(10, 5));

const bigNum2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(bigNum2(3, 5));

// Challenge 2:
// Write a function that takes two numbers as parameters and returns true if the first number is divisible by the second number, and false otherwise.
const divisible = (num1, num2) => num1 % num2 === 0

console.log(divisible(10, 5)) true
console.log(divisible(3,2)) false
console.log(divisible(10, 3)) false

// Challenge 3:
// Declare a variable called birthday that looks like this: const birthday = new Date('August 19, 1975 23:15:30');
// Use the getDay() method to create a variable that keeps track of the day of your birthday
// Write a switch statement using the day of your birthday variable that will cover all cases from Monday thru Friday, console log the day of the week in a string
// Declare a variable called birthday
const birthday = new Date('August 19, 1975 23:15:30');

// Use the getDay() method to create a variable that keeps track of the day of your birthday
const dayOfWeek = birthday.getDay();

// Write a switch statement using the day of your birthday variable
switch (dayOfWeek) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Output: "Tuesday" (August 19, 1975 was a Tuesday)

const bDay1 = (day) => day === 0? "Monday" : day === 1 "Tuesday" : day ===2 "Wednesday"


// Challenge 4:
// You're tasked with writing a function calculateSum that calculates the sum of two input numbers, a and b, and returns the result. However, the function should handle the following edge cases:
function calculateSum(a,b) {
    if (a === null) {a = 0}
    if (b === null) {b = 0}

    if (c === undefined) {c = 0}
    if (d === undefined) {d = 0}

    if (typeof 0 === 'number' && !Number.isInteger(a)) {a=Math.round(a);}
    if (typeof b === 'number' && !Number.isInteger(b) {b =Math.round(b);}
}
// If either a or b is not a number, the function should return an error message "Please provide valid numbers".
// If either a or b is undefined, the function should use a default value of 0.
// If either a or b is null, the function should use a default value of 0.
// If either a or b is a floating-point number, the function should round it to the nearest integer before performing the calculation.
// If the sum of a and b is greater than 100, the function should return an error message "Sum is too large".