// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');
var config = require('./config/config');

// redirect stdout / stderr
if (process.env.NODE_ENV == 'production') {
  var access = fs.createWriteStream(path.join(__dirname + '/access.log'), { flags: 'a' }),
      error = fs.createWriteStream(path.join(__dirname + '/error.log'), { flags: 'a' });
  process.stdout.pipe(access);
  process.stderr.pipe(error);
}

var mongooseUri = config.mongodb.url;
mongoose.connect(mongooseUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to MongoDB!');
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
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static("public"));

// Error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// START THE SERVER
var port = process.env.PORT || 8080; // set our port
app.listen(port);
console.log('Magic happens on port ' + port);
