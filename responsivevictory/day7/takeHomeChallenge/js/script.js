// Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: number of children, partner’s name, geographic location, job title. Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
// // Want to find out how old you’ll be? Calculate it! Store your birth year in a variable. Store a future year in a variable. Calculate your 2 possible ages for that year based on the stored values. For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in 2026. Output them to the screen like so: “I will be either NN or NN in YYYY”, substituting the values.

// Declare Variables
let numberOfChildren = 4;
let partnerName = "Brian";
let geographicLocation = "Seattle";
let jobTitle = "Software Developer";

// Output the Fortune
let fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
console.log(fortune);

// Age Calculator/ Declare Variables
let birthYear = 1979;
let futureYear = 2030;

// Calculate Possible Ages
let age1 = futureYear - birthYear;
let age2 = age1 -1;

// Output the Ages
let ageMessage = `I will be either ${age2} or ${age1} in ${futureYear}.`;
console.log(ageMessage);