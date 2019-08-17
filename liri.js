//npm package loads my API key and adds to process.env object
require('dotenv').config()

// Using the require keyword lets us access all of the exports in the keys.js file
var keys = require("./keys.js");

var action = process.argv[2];
//console.log("action is" + typeof action);
var movieName = process.argv[3];
//let value = process.argv[3];

/* include axios npm package */
var axios = require("axios");

/* include moment npm package */
var moment = require("moment");

// The switch-case will direct which function gets run.
switch (action) {
    case "movie-this":
      movie();
      break;
    
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      song();
      break;
    
    case "do-what-it-says":
      simon();
      break;
    }
    
    //If movie() is called...
    function movie() {

        /* if no movie title given.. display info for Mr Nobody */
                
        if (!movieName) {
            var queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
            //movieName = "Mr Nobody";            
            //var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

            console.log(queryUrl);

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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
        } //end if statement
        
        else {
            /* Then run a request with axios to the OMDB API with the movie specified */
        //var movieName = process.argv[3];
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        console.log(queryUrl);
        console.log('!!movie name is: ' + movieName);

        // console.log("moviename: " + movieName);

         axios
        .get(queryUrl)
        .then(function(response) {            
            console.log(`Title of movie: ${response.data.Title}
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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
        } //end else statement
    } //function end

            



        




  



  
  


