var express = require('express');
var router = express.Router();
var dataSet = require('../dataSet.json');

/* GET All Categories page. */
router.get('/', function(req, res, next) {
    res.render('allCategories', { title: 'All Categories', dataSet});
});

router.get('/:category', function(req, res, next) { // https://expressjs.com/en/api.html#req.params
    console.log(req.params);
    var category = dataSet.categories.find(function(current)
    {
        if(current.name.split(' ').join('_').replace(/,/g, '').toLowerCase().replace(/&_/, '') == req.params.category)
        {
            return true;
        }
    })
    console.log(category);
    res.render("subcategory", {category})
});
module.exports = router;