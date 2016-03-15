var express = require('express');
var path = require('path');
var router = express.Router();

/* GET Home Page */
router.get('/', function(req,res,next) {
    res.render('marsbase');
});

module.exports = router;
