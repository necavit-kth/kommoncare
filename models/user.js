var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  type: String,
  location: {
    address: String,
    geojson: {
      type: String,
      coordinates: [Number]
    }
  },
  phoneNumber: String,
  hasPets: Boolean,
  allergies: [String],
  challenges: {
    completed: [],
    active: [],
    published: []
  },
  awards: []
}, { typeKey: '$type' });

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
