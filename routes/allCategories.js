var express = require('express');
var router = express.Router();

/* GET All Categories page. */
router.get('/', function(req, res, next) {
    res.render('allCategories', { title: 'All Categories' });
});

module.exports = router;
