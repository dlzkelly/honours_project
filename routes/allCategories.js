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

router.get('/cameras_photography/telescopes_binoculars', function(req, res, next) {
    res.render('productBinoculars');
}); 
router.get('/computers_tablets_networking/printers_scanners_supplies', function(req, res, next) {
    res.render('productScanner');
});
router.get('/pet_supplies/birds', function(req, res, next) {
    res.render('productCage');
});
router.get('/music/cassettes', function(req, res, next) {
    res.render('productCassette');
});
router.get('/toys_games/jigsaws_puzzles', function(req, res, next) {
    res.render('productJigsaw');
});
router.get('/sporting_goods/scooters', function(req, res, next) {
    res.render('productScooter');
});
router.get('/mobile_phones_communication/smart_watches', function(req, res, next) {
    res.render('productSmartwatch');
});
router.get('/health_beauty/e-cigarettes_vapes_accs', function(req, res, next) {
    res.render('productVape');
});


module.exports = router;