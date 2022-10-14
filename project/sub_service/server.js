var express = require('express');
var app = express();
var indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3001, function () {
    console.log('Server running in port 3001..');
});

module.exports = indexRouter;