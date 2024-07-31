// Create a folder, js file, and branch called js-random-greeting
// Write a function randomGreeting that randomly returns one of the predefined greetings like "Hello", "Hi", "Hey", "Good day" and a person's name in a string. No using arrays.
function randomGreeting(name) {
    let randomNum = Math.floor(Math.random() * 4);
    console.log(randomNum);
    let greeting = "";
    if (randomNum === 0) {
        greeting = "Hello";
    }else if (randomNum === 1) {
        greeting = "Hi";
    }else if (randomNum === 2) {
        greeting = "Hey";
    }else {
        greeting = "Good day";
    }
    return `${greeting}  ${name}`

}
// Write another function called minutesToSeconds that takes one parameter (minutes) and returns the equivalent number of seconds.
function minutesToSeconds(minutes) { 
    return minutes * 60
}
console.log(minutesToSeconds(10));

// Write a function basicCalculator that takes two numbers and a string representing an operation (add, subtract, multiply, divide) and returns the result of that operation.
function basicCalculator(num1, num2, operation) {
    if (typeof num1 === "number" && typeof  num2 === "number") {

    if (operation === "add") {
        return num1 + num2
    }else if (operation === "subtract") {
        return num1 - num2
    }else if (operation === "multiply") {
        return num1 * num2
    }else if (operation === "divide") {
        return num1 / num2
    }else {
        return "enter valid operator"
    }
}
  else {
    return "must use number"
  }      
}


// // Add PR to this :thread:
console.log(basicCalculator(600, 408, "multiply"));