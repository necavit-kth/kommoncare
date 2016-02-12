//TODO var User = require('../models/callenge');

var challenges = require('../mocks/challenges.json'); // MOCK!!

module.exports = {

  // GET /challenges
  getChallenges: function(req, res, next) {
    res.json(challenges);
  },

  // GET /users/:id
  getChallenge: function(req, res, next) {
    var id = req.params.id;

    for (var i = 0; i < challenges.length; i++) {
      if (challenges[i].id === id) {
        res.json(challenges[i]);
        return; //important! otherwise, the flow continues!
      }
    }

    // not found:
    res.status(404).send('Ooops! No challenge with id: ' + id);
  }

};
