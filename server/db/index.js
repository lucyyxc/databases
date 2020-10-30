var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'miltsq',
  database: 'chat'
});

db.connect(console.log('connected'));

// db.query('SELECT * FROM Messages', (err, result) => {
//   if (err) {
//     console.log('errrror');
//   } else {
//     console.log(result);
//   }
// });
// db.connect(function(err) {
///   if (err) {
//     console.log('error in line 21');
//   }
//   console.log('Connected!');
//   db.query(sql, function (err, result) {
//     if (err) {
//       console.log ('error');
//     }
//     console.log('Result: ' + result);
//   });
// });

module.exports = db;

//try to understand mvc for server
  //controller has
  //model hass