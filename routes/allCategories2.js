var express = require('express');
var router = express.Router();

/* GET All Categories page. */
router.get('/', function(req, res, next) {
    res.render('allCategories2', { title: 'All Categories 2' });
});

module.exports = router;