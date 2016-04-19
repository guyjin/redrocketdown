var express = require('express');
var path = require('path');
var router = express.Router();

var title = "Red Rocket Down - Marsbase";
var pageClass = "marsbase";

/* GET Marsbase Home Page */
router.get('/', function(req,res,next) {
    res.render('marsbase', {
        "title": title,
        "pageClass":pageClass
    });
});

module.exports = router;
