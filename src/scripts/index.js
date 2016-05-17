var angular = require('angular');

var scriptModule = angular.module('mk.scripts', []);

scriptModule.service('scriptService', require('./services/script-service'));

module.exports = scriptModule.name;
