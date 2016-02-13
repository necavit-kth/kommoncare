var express = require('express');
var usersController = require('../controllers/users');
var categoriesController = require('../controllers/categories');
var challengesController = require('../controllers/challenges');

module.exports = function () {
  var router = express.Router();

  router.get('/users', usersController.getUsers);
  router.post('/users', usersController.createUser);
  router.get('/users/:id', usersController.getUser);
  router.delete('/users/:id', usersController.deleteUser);

  router.get('/categories', categoriesController.getCategories);
  router.post('/categories', categoriesController.createCategory);
  router.get('/categories/:id', categoriesController.getCategory);
  router.delete('/categories/:id', categoriesController.deleteCategory);

  router.get('/challenges', challengesController.getChallenges);
  router.post('/challenges', challengesController.createChallenge);
  router.get('/challenges/:id', challengesController.getChallenge);
  // router.delete('/challenges/:id', challengesController.deleteChallenge);
  // router.post('/challenges/action/:action', challengesController.applyActionToChallenge);

  return router;
};
