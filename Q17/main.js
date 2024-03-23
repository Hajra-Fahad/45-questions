// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
// Inform to print that only two guest can be invited for dinner 
console.log("unfortunately, the new table wont arrive on time, so i can only invite two guests to dinner with me");
// using while loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending the invitation to last two guests.
console.log("Invitation to the last two guests.");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ",you are still invited to dinner")); });
// removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
