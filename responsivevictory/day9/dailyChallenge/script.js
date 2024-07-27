// Challenge One
// Create a prompt asking for their name
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Use an alert() as the result for each case
// let name1= prompt("What is your name");
// // switch statement
// switch (name1.toLocaleLowerCase()) {
//     case "amy":
//         alert("it's Amy");
//         break;
//     case "tina":
//         alert("it's not you");
//         break;
//     case "ron":
//         alert("hi ron");
//         break;
//     default:
//         alert("not in system");

// }

// Challenge Two
// Create a prompt asking for their age and store the result in a variable
// Write a function that takes the prompt result as a argument and returns ternary expression with a boolean depending if their age is less than or equal to 18
let age = prompt("please enter age");

function legalAge (< 18)

// Challenge Three
// You are given a string of characters. Write a function that takes the string as an arguments and returns the codes below using if/else if statement
function getCodeFromString(chars) {
    const length = chars.length;
    // AA if chars is greater than 15
    if (length > 15) {
        return "AA";
     // AB if chars is greater than 13 and less than or equal to 15   
    }else if (length > 13 && length <= 15) {
        return "AB"
    }else if (length > 10 && length <=13) {
        return "BB";
    }else if (length > 7 && length <= 10) {
        return "BC";
    }else if (length > 7 && length <= 7) {
        return "BC";
    }else if (length >5 && length <= 7) {
        return "CC";
    }else if (length <= 5) {
        return "DD";
    }
}

console.log(getCodeFromString("hello, world"));





// BB if chars is greater than 10 and less than or equal to 13
// BC if chars is greater than 7 and less than or equal to 10
// CC if chars is greater than 5 and less than or equal to 7
// DD if chars is less than or equal to 5
// prompt




