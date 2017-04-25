var express = require('express');
var db = require('./server/db/connection/index.js');
var app = express();
var morgan = require('morgan');
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 next();
});

app.get('/notes', function (req, res) {
  // console.log(req.body);
  // res.send(__dirname + '/client/app/notes.js');
  db.query('select name, note from notes', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    var noteName = results[0].name;
    var note = results[0].note;

    var noter = {noteName: noteName, note: note}
    res.send(noter);
  });

});

app.post('/notes', function(req, res){
  var testData = req.body;
  console.log(testData)
  var val = testData;
  db.query('insert into notes (name, note) values ("testing", "val")')
  res.send();
  // console.log(res);
});

app.use(express.static(__dirname + '/client'));

app.listen(6464, function () {
  console.log('listening on port 6464!');
});
