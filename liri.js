//npm package loads my API key and adds to process.env object
require('dotenv').config()

// Using the require keyword lets us access all of the exports in the keys.js file
let keys = require("./keys.js");
console.log("keys: " + keys);
console.log('my client ID is '  + keys.id);
console.log('my client Secret is ' + keys.secret);

let axios = require("axios");
//console.log("axios: " + axios);

let moment = require("moment");
//console.log("moment: " + moment);

//let spotify = new Spotify(keys.Spotify);

//console.log("Spotify says: " + spotify);
