
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size:string = "Large",printmessage:string="I love TypeScript"){
    console.log(`\nYou selected "${size}" size shirt with "${printmessage}" prints on shirt.`)
}
// calling a function with by-default values
make_shirt();
// calling a function with medium size and default message
make_shirt("Medium");
// calling a function now with small size and also different print message.
make_shirt("Small","I love JAVAScript");