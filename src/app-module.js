var angular = require('angular');
var angularRoute = require('angular-route');
var angularBootstrap = require('angular-ui-bootstrap');
var mocksModule = require('./mocks/mocks-module');


var app = angular.module('mk.app', [
    angularRoute,
    angularBootstrap,
    mocksModule
]);

app.constant('apiUrl', 'http://localhost:8080');

app.directive('mkNavbar', require('./directives/navbar/navbar-directive'));