var User = require('../models/user');

module.exports = {

  //POST /users
  createUser: function(req, res, next) {
    // create a new user
    var newUser = User(req.body);

    // save the user
    newUser.save(function(err) {
      if (err) throw err;
      res.send('User: ' + req.body.name + ' has been created!');
    });
  },

  // GET /users
  getUsers: function(req, res, next) {
    User.find({}, function(err, users) {
      if (err) throw err;
      res.status(200).json(users);
    });
  },

  // GET /users/:id
  getUser: function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
      if (err) throw err;
      res.status(200).json(user);
    });
  },

  //DELETE /users/:id
  deleteUser: function(req, res, next) {
    User.findByIdAndRemove(req.params.id, function(err, user) {
      if (err) throw err;
      res.sendStatus(204);
    });
  }
};
