var express = require('express');
var router = express.Router();
var request = require('request');
var md5 = require('js-md5');
var ts = Date.now();
const url = 'https://gateway.marvel.com:443/v1/public/';
const convertCurrency = require('nodejs-currency-converter');

var hash = md5.create();
require('dotenv').config()
//
var toHash = ts+process.env.COMICS_PRIVATE_APIKEY+process.env.COMICS_PUBLIC_APIKEY

hash.update(toHash);

//
router.get('/preview/:limit/:offset', function (req, res, next) {
  let limit = req.params.limit;
	let offset = req.params.offset;

  var options = {
    url: url+'comics?dateDescriptor=thisWeek&offset='+offset+'&limit='+limit+'&ts='+ts+'&apikey='+process.env.COMICS_PUBLIC_APIKEY+'&hash='+hash.hex()
  }

   request(options, function (err, response, body) {

     if(err){
       return res.status(500).json({
         title: 'An error has occured',
         error: err
       })
     }

          res.json(JSON.parse(body).data);
    })

});

router.get('/details/:id', function (req, res, next) {
  let id = req.params.id;
  var options = {
    url: url+'comics/'+id+'?ts='+ts+'&apikey='+process.env.COMICS_PUBLIC_APIKEY+'&hash='+hash.hex()
  }
   request(options, function (err, response, body) {

     if(err){
       return res.status(500).json({
         title: 'An error has occured',
         error: err
       })
     }
     res.json({data: JSON.parse(body)});

    })

})

router.get('/search/:query', function (req, res, next) {
	let q = req.params.query;
	let str = q.slice(0, 5)
	let query = encodeURIComponent(str)

  var options = {
    url: url+'comics?titleStartsWith='+query+'&ts='+ts+'&apikey='+process.env.COMICS_PUBLIC_APIKEY+'&hash='+hash.hex()
  }

   request(options, function (err, response, body) {

     if(err){
       return res.status(500).json({
         title: 'An error has occured',
         error: err
       })
     }

		   res.json({data: JSON.parse(body)});

    })

})


module.exports = router;
