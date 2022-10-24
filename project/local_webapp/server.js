var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(express.static('./'));

app.listen(80, function () {
    console.log('Server running in port 80..');
});

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});
