var app = require('express')();
var path = require('path');
var gulp = require('gulp');
var config = require('./config')();
var hlp = require('./helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep', function () {
  var msg = 'Wiring Bower dependencies into the index.jade.';
  msg += '\nFile is in ' + app.get('views');
  hlp.log(msg);

  hlp.log(__dirname);

  var wiredep = require('wiredep').stream;
  // var options = config.getWiredepDefaultOptions();
  var options = {
    directory: '../bower_components',
    bowerJson: require('../bower.json'),
  };

  return gulp
    .src('../views/index.jade')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./'));

});

gulp.task('grr', function() {
  hlp.log(__dirname);
});
