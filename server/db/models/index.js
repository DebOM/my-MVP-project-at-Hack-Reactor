//this file is for server listeners, for request and respons

var db = require('../connection/index.js');

module.exports = {

  notes: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select * from notes';
      db.query(queryStr, function(err, results, field) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into notes(id, name, notes') ;
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

//   users: {
//     get: function (callback) {
//       // fetch all users
//       var queryStr = 'select * from users';
//       db.query(queryStr, function(err, results) {
//         callback(err, results);
//       });
//     },
//     post: function (params, callback) {
//       // create a user
//       var queryStr = 'insert into users(username) values (?)';
//       db.query(queryStr, params, function(err, results) {
//         callback(err, results);
//       });
//     }
//   }
// };
//
//










//
// connection.query('SELECT * from notes', function (err, result) {
//   if (err) throw err
//
//   console.log('The solution is: ', result)
// })
