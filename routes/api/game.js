var express = require('express');
var request = require("request");
var igdb = require('igdb-api-node').default;
require('dotenv').config()
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const client = igdb(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_APP_ACCESS_TOKEN);

        // Get game data
        const gameDataResponse = await igdb()
            .fields('id, name, genres')
            .limit(1)
            .search('fortnite')
            .request('/games');

        const gameData = {
            name: gameDataResponse.data[0].name,
            image_url: null
        };

        // Get cover data
        const coverDataResponse = await igdb()
            .fields('url')
            .where(`game = ${gameDataResponse.data[0].id}`)
            .request('/covers');

        if (coverDataResponse.data && coverDataResponse.data[0] && coverDataResponse.data[0].url) {
            var image_url = coverDataResponse.data[0].url
            image_url = image_url.replace("t_thumb", "t_cover_big")
            gameData.image_url = image_url.slice(2);
        }

        res.json(gameData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
