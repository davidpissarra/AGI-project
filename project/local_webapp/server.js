var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(express.static('./'));

app.listen(4000, function () {
    console.log('Server running in port 4000..');
});

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});
