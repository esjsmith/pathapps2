// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//        Required extra packages
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var appRoot = require('app-root-path').path + '/'; // Package to find root of project
var hlp = require('./helpers')();
var config = require(appRoot + 'gulp/config')();
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var app = require('express')();

gulp.task('wiredep', function () {
  var msg = 'Wiring Bower dependencies into the index.jade.';
  msg += '\nFile is in ' + app.get('views');
  hlp.log(msg);

  var wiredep = require('wiredep').stream;
  var options = config.getWiredepDefaultOptions();
  
  hlp.log(config.index);
  
  return gulp
    .src(config.index) //location of the index.jade file
    .pipe(wiredep(options))
    .pipe(gulp.dest(config.views)); // Drop it right back into the views directory
});
