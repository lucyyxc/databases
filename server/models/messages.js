var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM Messages', (err, data) => {
      if (err) {
        console.log('no messages');
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    db.query(`INSERT INTO Messages (text, User, Room) VALUES ('${message.text}', ${message.User}, ${message.Room});`, (err, data) => {
      if (err) {
        console.log('not able to post message');
      } else {
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};
