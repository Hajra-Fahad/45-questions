// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Ayesha", " Muhammad", "Fahad"];

let wontCome = guestList[0];

console.log(wontCome, "will not come.");

guestList.splice(0,1, "Hajra");

guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to have dinner with me ?`));

