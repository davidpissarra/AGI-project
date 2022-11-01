const redis = require('redis')
var express = require('express');
var router = express.Router();
var client = null;

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

router.get('/sub', async (req, res) => {
  var operationResult = parseFloat(req.query.arg1) - parseFloat(req.query.arg2);
  var operation = req.query.arg1 + ' - ' + req.query.arg2 + ' = ' + operationResult
  var idOfClient = req.query.clientId;
  var previous = [];
  var count = 0;
  if(client === null){
    client = redis.createClient({
      url: 'redis://db:6379'
    });
    await client.connect();
  }

  

  try {
    client.lPush(idOfClient, operation);

    count = await client.incr(idOfClient + "_count");

    previous = await client.lRange(idOfClient, 0, 4);
  } catch (error) {
    count = -1;
  }  

  res.json({ result: operationResult, clientId: idOfClient, prev: previous.toString(), count : count });
})

module.exports = router;
