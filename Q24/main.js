// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// • Tests for equality and inequality with strings
console.log("\nis  is equal to apple?");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");
// • Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// • Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//  not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//  Greater than
console.log("\nis ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty less than ten");
console.log(twenty < 10);
// greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// • Tests using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//  Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// • Test whether an item include in an array
console.log("is orange include in my fruits array?");
console.log(fruits.includes("orange"));
// • Test whether an item is not include in an array
console.log("is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
