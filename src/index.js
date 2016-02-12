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

app.constant('apiUrl', window.location.origin);

app.directive('mkNavbar', require('./directives/navbar/navbar-directive'));
app.directive('mkFormgroup', require('./directives/formgroup/formgroup-directive'));

app.filter('kebabCase', require('./filters/kebabcase-filter'));
app.filter('padRight', require('./filters/padright-filter'));
app.filter('httpStatus', require('./filters/httpstatus-filter'));

app.config(function ($routeProvider) {
    $routeProvider.otherwise('/mocks');
});