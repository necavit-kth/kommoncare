var Award = require('../models/award');

module.exports = {

  //POST /awards
  createAward: function(req, res, next) {
    var newAward = Award(req.body);
    newAward.save(function(err){
      if (err) throw err;
      res.status(201).send('Award: ' + newAward.name + ' has been created!');
    });
  },

  // GET /awards
  getAwards: function(req, res, next) {
    Award.find({},function (err, awards) {
      if (err) throw err;
      res.status(200).json(awards);
    });
  }

};
