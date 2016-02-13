var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var awardSchema = new Schema({
  name: String,
  description: String,
  functionString: String
});

// the schema is useless so far
// we need to create a model using it
var Award = mongoose.model('Award', awardSchema);

// make this available to our users in our Node applications
module.exports = Award;
