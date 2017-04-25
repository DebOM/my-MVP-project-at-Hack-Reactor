//this file is for database connection establishment
//db
//console.log('hello');
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',///this name maybe localhost
  user     : 'root',
  password : '',
  database : 'studywise'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // console.log('connected as id ' + connection.threadId);
});

// connection.query('select name, note from notes', function (error, results, fields) {
//   if (error) throw error;
//   console.log('ADDITIONAL INFO', results);
// });
//you may uncomment the following line and then move the connection.query and connection.end
//to a new file that maybe server

module.exports = connection;

// connection.end()\
