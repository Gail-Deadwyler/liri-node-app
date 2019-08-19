# liri-node-app

This project creates a LIRI Bot, a command line node application. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface that helps the user search for information about songs, concerts and movies.

#Overview
Installed required npm packages (axios, moment, dotenv, fs, node-spotify-api) using npm install <npm package name>. Initialized `package.json` using `npm init -y`. Created a `.gitignore` file to exclude: node_modules, .DS_Store and .env. Created `keys.js`, which contains a Spotify object with values of Spotify clientID and client secret and `.env` file to store the Spotify API keys. Created a random text file that contains spotify-this-song,"I Want it That Way". Within liri.js, the main code file, added code so that `.env` file will be used by the `dotenv` package to set environment variables to the global `process.env` object in node. Used require keyword to access all of the exports in the keys.js file. Also used require to include the npm packages: axios, moment, fs and node-spotify-api. Declared a variable to hold process.env[2] which determines the action a user takes. If the user chooses <concert-this>, a request is sent using axios to the Bands in Town Artist Events API. The moment npm package formats the date as "MM/DD/YYYY". If the user chooses <movie-this>, a request is sent using axios to the OMDB API. If the user chooses <spotify-this-song>, the <node-spotify-api> is used to retrieve song information from the Spotify API. If the user chooses <do-what-it-says>, LIRI will take the text inside of random.txt and then use it to call <spotify-this-song> using the [fs] Node package. Declared a variable to hold process.env[3] which contains song title, movie title or musical artist. A switch case statement is used to determine which function is invoked. The variable holding process.env[3], is supplied to the function call as an argument. These values are then passed to the functions as parameters. The functions trigger API calls to retrieve and display the requested information.

#How to use the app
If user types: node liri.js <movie-this> <movie name>, the following will be rendered to the terminal: 
    * Title of the movie 
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
If no movie name is given, information for the movie Mr Nobody is given by default

If the user types: node liri.js <concert-this> <musical artist name>, the following will be rendered to the terminal:
     * Name of the venue
     * Venue location
     * Date of the Event (formmatted: "MM/DD/YYYY")

If the user types: node liri.js <spotify-this-song> <song name>, the following will be rendered to the terminal:
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
If no song is given, information from "The Sign" by Ace of Base is given by default

If the user types: node liri.js <do-what-it-says>, LIRI will take the text inside of random.txt, use it to call <spotify-this-song> and the following will be rendered to the terminal:
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

#Technologies used: 
Node.js
JavaScript ES5 and ES6
npm packages (axios, moment, dotenv, fs, node-spotify-api)

#My role in app development
According to the project specifications, I created the code, researched how to use the APIs and tested the functionality of this application.

#Screenshots
![movie-this default](movie-this default.png)