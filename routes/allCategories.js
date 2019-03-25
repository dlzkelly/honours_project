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

//NEED TO PASS IN FRANKENSTEIN PAGE NAME SO THAT THE BREADRUMB CAN LINK TO THE PRODUCT'S SUBCATEGORY
router.get('/cameras_photography/telescopes_binoculars', function(req, res, next) {
    res.render('productBinoculars', {category: "Cameras & Photography", subcategory: "Telescopes & Binocolulars", catFormatted: "", subFormatted: ""});
}); 
router.get('/computers_tablets_networking/printers_scanners_supplies', function(req, res, next) {
    res.render('productScanner', {category: "Computers, Tablets & Networking", subcategory: "Printers, Scanners & Supplies", catFormatted: "", subFormatted: ""});
});
router.get('/pet_supplies/birds', function(req, res, next) {
    res.render('productCage' , {category: "Pet Supplies", subcategory: "Birds", catFormatted: "", subFormatted: ""});
});
router.get('/music/cassettes', function(req, res, next) {
    res.render('productCassette', {category: "Music", subcategory: "Cassettes", catFormatted: "", subFormatted: ""});
});
router.get('/toys_games/jigsaws_puzzles', function(req, res, next) {
    res.render('productJigsaw', {category: "Toys & Games", subcategory: "Jigsaws & Puzzles", catFormatted: "", subFormatted: ""});
});
router.get('/sporting_goods/scooters', function(req, res, next) {
    res.render('productScooter', {category: "Sporting Goods", subcategory: "Scooters", catFormatted: "", subFormatted: ""});
});
router.get('/mobile_phones_communication/smart_watches', function(req, res, next) {
    res.render('productSmartwatch', {category: "Mobile Phones & Communication", subcategory: "Smart Watches", catFormatted: "", subFormatted: ""});
});
router.get('/health_beauty/e_cigarettes_vapes_accs', function(req, res, next) {
    res.render('productVape', {category: "Health & Beauty", subcategory: "E-Cigarettes & Vapes", catFormatted: "", subFormatted: ""});
});

router.get('/:cat/:sub', function(req, res, next) {
    res.render('noProducts', {category: req.params.cat , subcategory: req.params.sub});
});

module.exports = router;