var Challenge = require('../models/challenge');
var Category = require('../models/category');
var User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;

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
  },

  //POST /challenges/:id/action/:action[{lock|complete}]
  applyActionToChallenge: function(req, res, next) {
    switch (req.params.action) {
      case "lock":
        //get the challenge
        Challenge.findById(req.params.id,function (err, challenge) {
          if (err) throw err;
          // update the challenge copy state and save
          challenge.state = "locked";
          challenge.lockerId = req.body.lockerId;
          challenge.save(function(err){
            if (err) throw err;
            // update the owner's copy
            User.findById(challenge.ownerId, function(err, owner) {
              if (err) throw err;
              var published = owner.challenges.published;
              for (var i = 0; i < published.length; i++) {
                if (published[i]._id == req.params.id) {
                  published.splice(i,1,challenge);
                  break;
                }
              }
              owner.save(function(err){
                if (err) throw err;
                // create the locker's copy in "active" challenges
                User.findById(req.body.lockerId, function(err, locker) {
                  if (err) throw err;
                  locker.challenges.active.push(challenge);
                  locker.save(function(err){
                    if (err) throw err;
                    res.sendStatus(200);
                  });
                });
              });
            });
          });
        });
        break;
      case "complete":
        //get the challenge
        Challenge.findById(req.params.id,function (err, challenge) {
          if (err) throw err;
          // update the challenge copy state and save
          challenge.state = "completed";
          challenge.save(function(err){
            if (err) throw err;
            // update the owner's copy
            User.findById(challenge.ownerId, function(err, owner) {
              if (err) throw err;
              var published = owner.challenges.published;
              for (var i = 0, len = published.length; i < len; i++) {
                if (published[i]._id == req.params.id) {
                  published.splice(i,1,challenge);
                  break;
                }
              }
              owner.save(function(err){
                if (err) throw err;
                // create the locker's copy in "active" challenges
                User.findById(challenge.lockerId, function(err, locker) {
                  if (err) throw err;
                  var activeChallenges = locker.challenges.active;
                  for (var i = 0, len = activeChallenges.length; i < len; i++) {
                    if (activeChallenges[i]._id == req.params.id) {
                      activeChallenges.splice(i,1);
                      break;
                    }
                  }
                  locker.challenges.completed.push(challenge);
                  locker.save(function(err){
                    if (err) throw err;
                    //TODO add awards thing!
                    res.sendStatus(200);
                  });
                });
              });
            });
          });
        });
        break;
      default:
        res.sendStatus(400);
        break;
    }
  }

};
