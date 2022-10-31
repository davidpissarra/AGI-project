const dns = require('dns');
var express = require('express');
var router = express.Router();

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
  res.json({ secret: process.env.MY_SECRET });
});

router.get('/sub', (req, res) => {
  var operationResult = parseFloat(req.query.arg1) - parseFloat(req.query.arg2);
  var operation = req.query.arg1 + ' - ' + req.query.arg2 + ' = ' + operationResult;
  var idOfClient = req.query.clientId;

  try {
      dns.lookup('db', function(err, address, family) {
        var previous = [];
        previous[0] = operation;

        res.json({ result: operationResult, clientId: idOfClient, prev: previous.toString() });
      });
  } catch (error) {
    res.json({ result: operationResult, clientId: idOfClient, prev: '' });
  }
})

module.exports = router;
