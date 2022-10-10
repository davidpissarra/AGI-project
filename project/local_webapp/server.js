var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(express.static('/mnt/c/Users/valen/Desktop/Test_express/'));

app.listen(5000, function () {
    console.log('Server running in port 5000..');
});

app.get('/', function (req, res) {
    res.sendFile('/mnt/c/Users/valen/Desktop/Test_express/index.html');
});
