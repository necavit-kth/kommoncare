// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://necavit:kommon1692@ds055875.mongolab.com:55875/kommoncaredb');
//mongoose.connect('mongodb://localhost/kommoncare');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('YAAAY');
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routing
var apiRouter = require('./routes/api');
app.use('/api', apiRouter());

// Angular app main file
app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/views/app.html'));
});

// START THE SERVER
var port = process.env.PORT || 8080; // set our port
app.listen(port);
console.log('Magic happens on port ' + port);
