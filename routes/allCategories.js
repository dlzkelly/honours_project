var express = require('express');
var router = express.Router();
var dataSet = require('../dataSet.json');

/* GET All Categories page. */
router.get('/', function(req, res, next) {
    res.render('allCategories', { title: 'All Categories', dataSet});
});

module.exports = router;