var Category = require('../models/category');

module.exports = {

/*
router.get('/categories', categoriesController.getCategories);
router.post('/categories', categoriesController.createCategory);
*/

  //POST /categories
  createCategory: function(req, res, next) {
    var newCategory = Category(req.body);

    // save the category
    newCategory.save(function(err) {
      if (err) throw err;
      res.status(201).send('Category: ' + req.body.name + ' has been created!');
    });
  },

  // GET /categories
  getCategories: function(req, res, next) {
    Category.find({}, function(err, categories){
      if (err) throw err;
      res.status(200).json(categories);
    });
  },

  // GET /categories/:id
  getCategory: function(req, res, next) {
    Category.findById(req.params.id, function(err, category) {
      if (err) throw err;
      res.status(200).json(category);
    });
  },

  //DELETE /categories/:id
  deleteCategory: function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, function(err, category) {
      if (err) throw err;
      res.sendStatus(204);
    });
  }
};
