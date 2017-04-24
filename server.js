var express = require('express')
var app = express();


// app.get('/notes', function (req, res) {
//   res.send('./client/app/index.html')
// })
app.use(express.static(__dirname + '/client'));

app.listen(6464, function () {
  console.log('listening on port 6464!')
})
