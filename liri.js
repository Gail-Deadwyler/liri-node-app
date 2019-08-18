/**
 * Programming assignment:  LIRI Bot
 * Developer:               Gail Deadwyler
 * Date Written:            8/19/19
 * Purpose:                 LIRI (_Language_ Interpretation and Recognition Interface) is a command line node app  
 *                          that takes in parameters and gives you back data.
 */


/* npm package loads my API key and adds to process.env object */
require("dotenv").config();

/* Using the require keyword - access all of the exports in the keys.js file */
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

//console.log(spotify);

var action = process.argv[2];
var input = process.argv[3];

/* include axios npm package */
var axios = require("axios");

/* include moment npm package */
var moment = require("moment");

/* include fs package for reading and writing files */
var fs = require("fs");

/* The switch-case will direct which function gets run */
switch (action) {
    case "movie-this":
      movie(input);
      break;
    
    case "concert-this":
      concert(input);
      break;
    
    case "spotify-this-song":
      song(input);
      break;
    
    case "do-what-it-says":
      simon();
      break;
    }
    
    /* If movie() is called... */
    function movie(movie) {
      input = movie;
        var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";                
        
        /* if no movie title given.. display info for Mr Nobody */
        if (!input) {
            //var queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
            input = "Mr Nobody";            
            queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

            axios
            .get(queryUrl)
            .then(function(response) {
            
            return console.log(`Title of movie: ${response.data.Title}
            Year the movie came out: ${response.data.Year}
            IMDB Rating of the movie: ${response.data.imdbRating} 
            Rotten Tomatoes Rating of the movie: ${response.data.Ratings[1].Value}
            Country where the movie was produced: ${response.data.Country} 
            Language of the movie: ${response.data.Language}
            Plot of the movie: ${response.data.Plot}
            Actors in the movie: ${response.data.Actors}`);            
        })
        .catch(function(error) {
            if (error.response) {
            /* The request was made and the server responded with a status code */
            /* that falls out of the range of 2xx */
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            /* The request was made but no response was received */
            /* `error.request` is an object that comes back with details pertaining to the error that occurred */
            console.log(error.request);
            } else {
            /* Something happened in setting up the request that triggered an Error */
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
        } /* end if statement */        
        
        /* Then run a request with axios to the OMDB API with the movie specified */        
        var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

        axios
        .get(queryUrl)
        .then(function(response) {            
            return console.log(`Title of movie: ${response.data.Title}
            Year the movie came out: ${response.data.Year}
            IMDB Rating of the movie: ${response.data.imdbRating} 
            Rotten Tomatoes Rating of the movie: ${response.data.Ratings[1].Value}
            Country where the movie was produced: ${response.data.Country} 
            Language of the movie: ${response.data.Language}
            Plot of the movie: ${response.data.Plot}
            Actors in the movie: ${response.data.Actors}`);            
        })
        .catch(function(error) {
            if (error.response)     {
            /* The request was made and the server responded with a status code */
            /* that falls out of the range of 2xx */
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            /*  The request was made but no response was received */
            /* `error.request` is an object that comes back with details pertaining to the error that occurred.*/
            console.log(error.request);
            } else {
            /* Something happened in setting up the request that triggered an Error */
            console.log("Error", error.message);
            }
            console.log(error.config);
        });        
    } /* function end 

    /* If concert() is called */
    function concert(artist) {
      input = artist;

      var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

      axios
      .get(queryUrl)
      .then(function(response) {

        let bands = response.data;        

        for(let band of bands) {
          console.log(`Name of the venue: ${band.venue.name}
          Venue location: ${band.venue.city}, ${band.venue.country}
          Date of event: ${moment(band.venue.datetime).format("L")}`);
        }
      })
    } /* function end

    /* If song() is called */
    function song(song) {
      input = song;
      /* if no song is given, default is Ace of Base */
      if(!input) {

        input = "The Sign Ace of Base";
      }
      spotify
      .search({type: "track", query: input}) 
      .then(function(response) {

        //console.log(JSON.stringify(response));

        var tracks = response.tracks.items;
        console.log(`Artist: ${tracks[0].artists[0].name}
        Song Title: ${tracks[0].name}
        Preview URL: ${tracks[0].preview_url}
        Album Name: ${tracks[0].album.name}`); 
      })
      .catch(function(err) {
        console.log(err);
      });         
    } /* function end

    /* If simon() is called */
    function simon() {
      fs.readFile("random.txt", "utf8", function(error, data) {
        /* If the code experiences any errors it will log the error to the console. */
        if (error) {
          return console.log(error);
        }      
        /* print the contents of data */
        console.log(data);
      
        /* Then split it by commas (to make it more readable) */
        var dataArr = data.split(",");        
      
        /* Call/invoke my song function with dataArr[1] as argument */            
        song(dataArr[1]); 
        //movie(dataArr[1]);
      });
    } /* function end */