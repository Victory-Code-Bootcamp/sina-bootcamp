// FizzBuzz challenge
// Write a function called fizzbuzz that will accept no arguments
function fizzbuzz() {
    for (let index = 0; index < 100; index++) {
        if( index % 3 === 0 && index % 5 === 0){
            console.log("fizzbuzz")
        }else if(index % 3 === 0 && index % 5 !== 0){
            console.log("fizz")
        }else if (index % 5 ===0 && index % 3 !== 0){
            console.log("buzz")
        }else {
            console.log(index)
        }
            
    }
}
fizzbuzz()
// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz"
// For every number that is divisible by only 3 and not 5, console log "Fizz"
// For every number that is divisible by only 5 and not 3, console log "Buzz

// Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.
// Write a function that takes in an array of strings and returns a new array where each string is capitalized.

// let nums = [1,2,3,4,5,6,7,8,9,10]
// let addEven = () => {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[1] % 2 === 0) {
//             sum +- nums[i];
//         }
//     }
//     return sum;
// }

// console.log(addEven())

const words = ["the","at","he","she","are","two"]
const wordLengths = words.map(word => word.toUpperCase());
console.log(wordLengths);