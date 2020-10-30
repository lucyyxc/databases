var models = require('../models');
var router = require('express').Router();


module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        console.log ('could not get user');
      } else {
        console.log(data);
        res.send(data);
      }
    });
    console.log('got');
  },
  post: function (req, res) {
    console.log(req.body.Name);
    models.users.create(req.body.Name, (err, data) => {
      if (err) {
        console.log ('could not get user');
      } else {
        // res.status(200).send;
        res.send('post is sent');
      }
    });
  }
};
