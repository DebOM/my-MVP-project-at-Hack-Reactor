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
  }
}
