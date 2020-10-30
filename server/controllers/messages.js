var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        console.log('could not get messages');
      } else {
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // res.statusCode(200);
        console.log('success!');
        res.send('posted');
      }
    });
  } // a function which handles posting a message to the database
};
