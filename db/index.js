//this file is for database connection establishment
//db
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 6464,
  user     : '',
  password : '',
  database : 'studywise'
});

connection.connect()

connection.query('SELECT * from notes', function (err, result) {
  if (err) throw err

  console.log('The solution is: ', result)
})

connection.end()
