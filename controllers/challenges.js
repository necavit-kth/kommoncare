var Challenge = require('../models/challenge');
var Category = require('../models/category');
var User = require('../models/user');

module.exports = {

  //POST /challenges
  createChallenge: function(req, res, next) {
    var data = req.body;

    Category.findById(data.categoryId, function(err, category) {
      if (err) throw err;
      User.findById(data.ownerId, function(err, owner) {
        if (err) throw err;
        var newChallenge = Challenge({
          description: data.description,
          category: category,
          ownerId: data.ownerId,
          state: "open"
        });
        console.log(owner);
        owner.challenges.published.push(newChallenge);
        owner.save(function(err){
          if (err) throw err;
          newChallenge.save(function(err) {
            if (err) throw err;
            res.send('Challenge: ' + data.description + ' has been created!');
          });
        });
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
  },

  // DELETE /challenges/:id
  deleteChallenge: function(req, res, next) {
    Challenge.findByIdAndRemove(req.params.id, function(err) {
      if (err) throw err;
      res.sendStatus(204);
    });
  }

  //POST /challenges/:id/action/{lock|complete}
  // applyActionToChallenge: function(req, res, next) {
  //
  // }

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
