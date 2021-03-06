var express = require('express'),
browserSync = require('browser-sync'),
path = require('path'),
ejs = require('ejs'),
logger = require('debug'),
compileSass = require('express-compile-sass'),
root = process.cwd() + "/public",
port = process.env.PORT || 8080;

var home = require('./routes/index');
var marsbase = require('./routes/marsbase');
var about = require('./routes/about');


var rrd = express();


// view engine setup

rrd.set('view engine', 'ejs');

// Configure the compileSass component
rrd.use(compileSass({
    root: root,
    sourceMap: true,
    sourceComments: true,
    watchFiles: true,
    logToConsole: true
}));
// set default location for static files
rrd.use(express.static(root));
// rrd.use(express.static('public'));



rrd.use('/', home);
rrd.use('/marsbase', marsbase);
rrd.use('/about', about);

module.exports = rrd;

rrd.listen(8080, function() {
    console.log("RedRocketDown running on port 8080");
    browserSync({
        proxy: 'localhost:' + port,
        files: ['public/**/*.{js,scss}', 'views/**/*.ejs']
    });
});
