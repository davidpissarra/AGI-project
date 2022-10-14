var express = require('express');
var app = express();
var indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3002, function () {
    console.log('Server running in port 3002..');
});

module.exports = indexRouter;