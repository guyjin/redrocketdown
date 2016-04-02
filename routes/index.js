var express = require('express');
var path = require('path');
var router = express.Router();

var title = "Red Rocket Down";
var pageClass = "home";

/* GET Home Page */
router.get('/', function(req,res,next) {
    res.render('index', {
        "title":title,
        "pageClass":pageClass
    });
});

module.exports = router;
