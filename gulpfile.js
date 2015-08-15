'use strict';

var appRoot = require('app-root-path').path; // Package to find root of project

var gulp = require('gulp');
var wrench = require('wrench');
var hlp = require(appRoot + '/gulp/helpers')();
var config = require(appRoot + '/gulp/config.js')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i)
    .test(file);
  })
  .map(function(file) {
    require('./gulp/' + file);
});

gulp.task('help', $.taskListing);