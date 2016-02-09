window.jQuery = require('jquery');
var angular = require('angular');

var app = angular.module('mk.app', [
    require('angular-route'),
    require('angular-messages'),
    require('angular-ui-bootstrap'),
    require('./mocks'),
    require('./proxies'),
    require('./logs')
]);

app.constant('apiUrl', 'http://localhost:8080');

app.directive('mkNavbar', require('./directives/navbar/navbar-directive'));
app.directive('mkFormgroup', require('./directives/formgroup/formgroup-directive'));

app.filter('kebabCase', require('./filters/kebabcase-filter'));

app.config(function ($routeProvider) {
    $routeProvider.otherwise('/mocks');
});