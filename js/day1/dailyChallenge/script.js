
// Challenge 1: Array Spread
// Combine two arrays into a single array using the spread operator.
// const array1 = [1,2,3,4]
// const array2 = [5,6,7,8]
// const combineArray = [...array1,...array2]
// console.log(combineArray);

// Challenge 2: Object Spread
// Create a new object by merging multiple objects using the spread operator.
// const object1 = {a: 1, b: 2};
// const object2 = {c: 3, d: 4};
// const object3 = {e: 5, f: 6};

// const mergeObject = {...object1,...array2,...object3};

// console.log(mergeObject);

// Challenge 3: Array Rest
// Create a function that accepts a variable number of arguments and uses the rest operator to gather them into an array.
// function gatherArgs(...args) {
//     console.log(args);
//     return args;
// }
// const result = gatherArgs(1,2,3,4,5);
// console.log(result);

// Challenge 5: Array Destructuring
// Extract individual elements from an array using array destructuring.
// const eggs = [1, 2, 3];
// const [a,b,c] = eggs;
// console.log(a);
// console.log(b);
// console.log(c);

// Challenge 6: Object Destructuring
// Extract specific properties from an object using object destructuring.
// Step 1: Declare an object
// const person = {
//     name: 'Sina',
//     age: 44,
//     city: 'Kirkland',
//     occupation: 'Developer'
// };
// Step 2: Destructure the object
// const {name, age, city } = person;
// Step 3: Use the extracted variables
// console.log(name);
// console.log(age);
// console.log(city);

// Challenge 7: Destructuring with Default Values
// Use destructuring to assign default values to variables when extracting from an array or object.
// const arr = [1,2,3];
// const [a, b, c] = arr;
// console.log(a, b, c,)

// const arr = [1, 2];
// const [a = 10, b = 20, c = 30] = arr;
// console.log(a, b, c);

// const person = { name: "Sina", age: 44 };
// const { name, age } = person;
// console.log(name, age);

// const person = { name: "Sina"};
// const { name, age = 44 } = person;
// console.log(name, age);
// const arr = [undefined, 5];
// const [x = 1, y = 2, z = 3] = arr;
// console.log(x, y, z);


// Challenge 8: Destructuring Function Parameters
// Create a function that accepts an object as a parameter and uses destructuring to extract specific properties.
// const user = {
//     name: "Sina",
//     age: 44,
//     address: {
//       city: "Seattle",
//       country: "USA"
//     }
//   };
  
//   function displayInfo({ name, age, address: { city, country } }) {
//     console.log(`${name} is ${age} years old and lives in ${city}, ${country}.`);
//   }
  
//   displayInfo(user);
  
  
