var appRoot = require('app-root-path').path + '/'; // Package to find root of project
var path = require('path');
var hlp = require('./helpers')();

var config = require(appRoot + 'gulp/config')();
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep', function () {
  var msg = 'Wiring Bower dependencies into the index.jade.';
  msg += '\nFile is in ' + app.get('views');

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
