window.jQuery = require('jquery');
window.CodeMirror = require('codemirror/lib/codemirror');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

var angular = require('angular');
require('angular-route'),
require('angular-messages'),
require('angular-ui-bootstrap'),
require('angular-ui-codemirror/src/ui-codemirror');
require('./mocks'),
require('./proxies'),
require('./logs'),
require('./backup'),
require('./scripts')

var app = angular.module('mk.app', [
    'ngRoute',
    'ngMessages',
    'ui.bootstrap',
    'ui.codemirror',
    'mk.mocks',
    'mk.proxies',
    'mk.logs',
    'mk.backup',
    'mk.scripts'
]);

//app.constant('apiUrl', window.location.origin);
app.constant('apiUrl', "http://localhost:8080");

app.directive('mkNavbar', require('./directives/navbar/navbar-directive'));
app.directive('mkFormgroup', require('./directives/formgroup/formgroup-directive'));

app.filter('kebabCase', require('./filters/kebabcase-filter'));
app.filter('padRight', require('./filters/padright-filter'));
app.filter('httpStatus', require('./filters/httpstatus-filter'));

app.config(function ($routeProvider) {
    $routeProvider.otherwise('/mocks');
});
