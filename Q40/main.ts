// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.


// // Define the Album interface
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
 
function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Call the "make_album" function with different arguments and log the results.
console.log(make_album("Artist One", "The First Album")); // Output: { artist: 'Artist One', title: 'The First Album' }
console.log(make_album("Artist Two", "The Second Album")); // Output: { artist: 'Artist Two', title: 'The Second Album' }
console.log(make_album("Artist Three", "The Third Album", 12)); // Output: { artist: 'Artist Three', title: 'The Third Album', tracks: 12 }
