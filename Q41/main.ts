// Declare an array of strings called "magicians".
let magicians: string[] = ["Henry", "Peter", "Christian"];

// Define a function called "show_magicians" that takes an array of strings as a parameter.
function show_magicians(magicians: string[]) {
    // Use the forEach method 
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call the "show_magicians" function, passing in the "magicians" array.
// This will display the names of the magicians in the console.
show_magicians(magicians);