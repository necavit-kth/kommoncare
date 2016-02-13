var mongoose = require('mongoose');
var Category = require('./category');
var Schema = mongoose.Schema;

// create a schema
var challengeSchema = new Schema({
  description: String,
  category: Category.schema,
  ownerId: String,
  lockerId:String,
  state: String,
  location: {
    address: String,
    geojson: {
      type: String,
      coordinates: [Number]
    }
  },
  startDate: Date,
  endDate: Date
}, { typeKey: '$type' });

// the schema is useless so far
// we need to create a model using it
var Challenge = mongoose.model('Challenge', challengeSchema);

// make this available to our users in our Node applications
module.exports = Challenge;
