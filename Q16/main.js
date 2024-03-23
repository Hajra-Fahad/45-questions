// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// creating a guest list array
var guestList = ["Ayesha", "Muhammad", "Fahad", "Fatima"];
// making variable for those guest who will not come
var wontCome = guestList[0];
// printing the name of guest who is not coming
console.log(wontCome, "will not come.");
// add or remove values from guest list array
guestList.splice(0, 1, "Hajra");
// message print for getting bigger table
console.log("Good news, We have found a bigger table for a dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Shahbaz");
// Adding a new guest at ending index of array
guestList.push("Rimsha");
//making a variable for storing guest in a middle of the index
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Hareem");
// print a messsa of updated list
console.log("Updated list of our Guests");
// sending a invitation message to our guest one by one with their names. 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to have a dinner with me ?")); });
