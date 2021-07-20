var express = require('express');
var router = express.Router();
var request = require('request');
var base64 = require('base-64');
require('dotenv').config();
var clientID = process.env.SPOTIFY_CLIENT_ID;
var clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
var h = clientID +':'+ clientSecret;
var credentials = base64.encode(h);
var token;

router.get('/getgames/', function (req, res) {

     var options = {
       url:'https://www.gamerpower.com/api/giveaways',

     }
      request.get(options, function (err, response, body) {

        if(err){
          return res.status(500).json({
            title: 'An error has occured',
            error: err
          })
        }

           res.json(JSON.parse(body));
       })

    })


module.exports = router;
