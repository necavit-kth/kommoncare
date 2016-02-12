//TODO var User = require('../models/user');

var users = require('../mocks/users.json'); // MOCK!!

// grab the user model
var User = require('../models/user');

module.exports = {

  //POST /users
  createUser: function(req, res, next) {
    console.log(req.body);

    // create a new user
    var newUser = User(req.body);

    // save the user
    newUser.save(function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
      res.send("<h1>User created!!</h1>");
    });
  },

  // GET /users
  getUsers: function(req, res, next) {
    User.find({}, function(err, users) {
      if (err) throw err;

      // object of all the users
      console.log(users);
      res.json(users);
    });
  },

  // GET /users/:id
  getUser: function(req, res, next) {
    var id = req.params.id;

    for (var i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        res.json(users[i]);
        return; //important! otherwise, the flow continues!
      }
    }

    // not found:
    res.status(404).send('Ooops! No user with id: ' + id);
  }

};
