// Initialize an array for usernames
let usernames: string[] = ["Admin", "Umer", "Fatima", "Ali", "Fahad"];
usernames = []
// Check if the array is empty
if (usernames.length === 0) {
  console.log("Your Array is empty We need to find some users!"); // Display a message if no users are found
} else {
  usernames.forEach((oneuser) => {
    if (oneuser === "Admin") {
      console.log(`Hello ${oneuser},Would you like to see a status report?`);
    } else {
      console.log(`Hello ${oneuser}, thank you for logging in again.`);
    }
  });
}
