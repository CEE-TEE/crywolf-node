var express = require('express');
var Honeybadger = require('honeybadger');

Honeybadger.logger.level = 'info';

var app = express();

app.get('/', function (req, res) {
  res.send('Looking to <a href="/fail?foo=bar&bar=baz&user_email=josh@honeybadger.io">fail?</a>');
});

app.get('/fail', function (req, res) {
  throw(new Error('This is a runtime error generated by the crywolf app.'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(Honeybadger.errorHandler);