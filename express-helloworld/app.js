var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/', function (req, res) {
  res.send('Hello Babe!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

