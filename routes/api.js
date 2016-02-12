var express = require('express');
var usersController = require('../controllers/users');
var challengesController = require('../controllers/challenges');

module.exports = function () {
  var router = express.Router();

  router.get('/users', usersController.getUsers);
  router.get('/users/:id', usersController.getUser);
  //TODO router.post('/users', itemsController.saveUser);

  router.get('/challenges', challengesController.getChallenges);
  router.get('/challenges/:id', challengesController.getChallenge);

  return router;
};
