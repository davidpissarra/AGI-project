var express = require('express');
var router = express.Router();
var request = require('request');
const dns = require('node:dns');

const options = {
  family: 4
};

const dnsPromises = dns.promises;

var ip = '';

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calculator' });
});

router.get('/secret', (req, res) => {
  res.json({ secret: process.env.MY_SECRET })
})

router.get('/mult', (req, res) => {
  var operationResult = parseFloat(req.query.arg1) * parseFloat(req.query.arg2);
  var idOfClient = req.query.clientId;
  try {
    if(ip === ''){
      dnsPromises.lookup('db', options).then((result) => {
        ip = result.address;
      });
    }
  } catch (error) {
    ip = "error";
  }
  res.json({ result: operationResult, clientId: idOfClient, redisIp: ip});
})

module.exports = router;