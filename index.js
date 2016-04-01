var express = require('express');
var path = require('path');
var ejs = require('ejs');
var logger = require('debug');

var home = require('./routes/index');
var marsbase = require('./routes/marsbase');


var rrd = express();


// view engine setup

rrd.set('view engine', 'ejs');



rrd.use(express.static('public'));

rrd.use('/', home);
rrd.use('/marsbase', marsbase);

rrd.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// // dev error handler will show stacktrace
// if(rrd.get('env') === 'development') {
//     rrd.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }
//
// // prod error handler
// // no stacktrace
// rrd.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

module.exports = rrd;

rrd.listen(8080, function() {
    console.log("RedRocketDown running on port 8080");
});
