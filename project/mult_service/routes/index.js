var express = require('express');
var router = express.Router();
var request = require('request');

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
  res.json({ result: operationResult});
})

module.exports = router;