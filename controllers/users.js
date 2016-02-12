//TODO var User = require('../models/user');

var users = require('../mocks/users.json'); // MOCK!!

module.exports = {

  // GET /users
  getUsers: function(req, res, next) {
    res.json(users);
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
