// Create an array of usernames
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];


usernames.forEach(username => {
    if (username === "admin") {
        console.log("\nHello admin, would you like to see a status report?"); // Display a message for the admin user
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`); // Display a generic message for other users
    }
});
