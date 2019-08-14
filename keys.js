console.log('this is loaded');

//Spotify object with key(id): value(clientID), key(secret): value(clientSecret)
module.exports = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};