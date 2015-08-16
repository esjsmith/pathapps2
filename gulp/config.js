/**
 *
 * @returns {{build: string, getWiredepDefaultOptions: Function, index: string, views: *}}
 */
module.exports = function () {
  'use strict';
  var paths, app, appRootPath;
  app = require('express')();
  appRootPath = require('app-root-path').path + '/';

  paths = {
    bower: {
      json: require(appRootPath + 'bower.json'),
      directory: appRootPath + 'bower_components/',
      ignorePath: '../..',
      onError: function(err) {
        console.log("Problem!");
        console.log(err);
      },
      gulpPath: appRootPath + 'gulp/'
    },
    temp: '/.tmp/',
    views: app.get('views')
  };

  return {
    build: '../build/',
    getWiredepDefaultOptions: function() {
      "use strict";
      return {
        bowerJson: paths.bower.json,
        directory: paths.bower.directory,
        ignore: paths.bower.ignorePath
      };
    },
    index: app.get('views') + '/index.jade',
    views: paths.views,
    gulpPath: paths.gulpPath
  };

};