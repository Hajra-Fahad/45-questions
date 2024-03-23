let countries: string[] = ["China","Denmark","Brazil","America"];
console.log("Orignial Order",countries);
// Printing array in alphabetical order without modifying the actual list.
console.log("Alphabetical order",[...countries].sort());
// Priniting that it is in still in original order
console.log("Still in Orignial Order",countries);
// Printing array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order",[...countries].reverse());
// Printing to show array is still in its original order by printing it again.
console.log("Still in Orignial Order",countries);
// Printing the array to show that its original order has reverse.
console.log("Orignial Array reversed",countries.reverse());
// Printing the list to show it’s back to its original order.
console.log("Back to Orignial Order",countries.reverse());
// Sorting array in alphabetical order. Print the array to show that its order has been changed.
console.log("Stored in Alphabetical order",countries.sort());
// we have changed again the original array order now in reverse order again.
console.log("Orignial Array reversed again",countries.reverse());
