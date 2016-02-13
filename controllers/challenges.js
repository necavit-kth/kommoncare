var Challenge = require('../models/challenge');
var Category = require('../models/category');

module.exports = {

  //POST /challenges
  createChallenge: function(req, res, next) {
    var data = req.body;

    Category.findById(data.categoryId, function(err, category) {
      if (err) throw err;

      var newChallenge = Challenge({
        description: data.description,
        category: category,
        ownerId: data.ownerId
      });

      newChallenge.save(function(err) {
        if (err) throw err;
        res.send('Challenge: ' + data.description + ' has been created!');
      });
    });
  },

  // GET /challenges
  getChallenges: function(req, res, next) {
    Challenge.find({},function (err, challenges) {
      if (err) throw err;
      res.status(200).json(challenges);
    });
  },

  // GET /challenges/:id
  getChallenge: function(req, res, next) {
    Challenge.findById(req.params.id,function (err, challenge) {
      if (err) throw err;
      res.status(200).json(challenge);
    });
  }

};

/*
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
*/
