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
        //  next();
    })

});
function findAndReplace(object, value, replacevalue) {
  //console.log(replacevalue)
  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      if (typeof object[x] == 'object') {
        findAndReplace(object[x], value, replacevalue);
      }
      if (object[x] == value) {
        object["name"] = replacevalue;
         break; // uncomment to stop after first replacement

      }
    }
  }
}
router.get('/details/:id', function (req, res, next) {
  let id = req.params.id;
  console.log(req.params)
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

  // console.log("comics "+query)
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
		 // console.log(body)
		   res.json({data: JSON.parse(body)});

    })

})


module.exports = router;
