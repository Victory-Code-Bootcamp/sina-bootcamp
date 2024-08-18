// // Importing packages
// import { faker } from '@faker-js/faker';
// const { faker } = require('@faker-js/faker');
// const readlineSync = require('readline-sync');

// // function to generate random user datat
// function generateUserData(count) {
//     const users = [];

//     for (let i = 0; i < count; i++) {
//         const user = {
//             name: faker.name.findName(),
//             email: faker.internet.email(),
//             address: faker.address.streetAddress(),
//             phone: faker.phone.phoneNumber(),
//         };
//         users.push(user);
//     }
//     return users;
// }

// // command-line interface to get user input
// const numberOfUsers = readlineSync.questionInt('How many users do you want to generate?');

// // Generate user data
// const users = generateUserData(numberOfUsers);

// // Display the generated data
// console.log(`\nGenerated User Data:\n`);
// users.forEach((user, index) => {
//     console.log(`{index + 1}. Name: ${user.name}`);
//     console.log(` Email: ${user.email}`);
//     conseol.log(` Address: ${user.address}`);
//     console.log(` Phone ${user.phone}\n`);
// });
//This way wasn't working so I attempted it again looking at my classmates work?

const { faker } = require("@faker-js/faker");
// Get the number of users to generate from command-line 
const numberOfUsers = parseInt(process.argv[2]) || 1;

// Funcion to generate a random user
function generateUserData() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
    };
}

// Generate & print number of users
const users = [];
for (let i = 0; i < numberOfUsers; i++) {
    users.push(generateUserData());  
}

console.log("Generated User Data");
users.forEach((user, index) => {
    console.log(`${index + 1}. Name: ${user.name}`);
    console.log(` Email: ${user.email}`);
    console.log(` Address: ${user.address}`);
    console.log(` Phone: ${user.phone}`);
    console.log("");
});