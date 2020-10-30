var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM User', (err, result) => {
      if (err) {
        console.log('errrror');
      } else {
        callback(null, result);
      }
    });
  },
  create: function (name, callback) {
    db.query(`INSERT INTO User (Name) VALUES ("${name}") `, (err, result) => {
      if (err) {
        console.log('errrror');
      } else {
        callback(null, result);
      }
    });
  }
};




// db.connect(console.log('connected'));
// db.query('SELECT * FROM Messages', (err, result) => {
//   if (err) {
//     console.log('errrror');
//   } else {
//     callback(null, result);
//   }
// });

console.log('DB QUERY', db.query);