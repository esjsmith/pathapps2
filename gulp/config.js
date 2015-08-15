/**
 *
 * @returns {{build: string, getWiredepDefaultOptions: Function, index: string, views: *}}
 */
module.exports = function () {
  'use strict';
  var paths, app, appRootDir;
  app = require('express')();
  appRootDir = require('app-root-dir').get() + '/';

  paths = {
    bower: {
      json: require(appRootDir + 'bower.json'),
      directory: appRootDir + 'bower_components/',
      ignorePath: '../..',
      onError: function(err) {
        console.log("Problem!");
        console.log(err);
      }
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
    index: '../views/layout',
    views: paths.views
  };

};