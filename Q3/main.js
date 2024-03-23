"use strict";
// . Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Hajra fahad";
// printing in lower case
console.log(personName.toLowerCase());
// printing in upper case
console.log(personName.toUpperCase());
// printing in title case
console.log(personName.replace(/\b\w/g, (abcd) => abcd.toUpperCase()));
