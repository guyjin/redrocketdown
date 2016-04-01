var express = require('express');
var path = require('path');
var router = express.Router();

var title = "Red Rocket Down - Marsbase";

/* GET Marsbase Home Page */
router.get('/', function(req,res,next) {
    res.render('index', {
        "title": title
    });
});

module.exports = router;
