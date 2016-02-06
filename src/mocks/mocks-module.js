/**
 * Created by rwatanabe on 05/02/16.
 */
var angular = require('angular');


var mocksModule = angular.module('mk.mocks', []);

mocksModule.config(function ($routeProvider) {

    $routeProvider.when('/mocks', {
        template: require('./templates/list-template.html'),
        controller: require('./controllers/list-controller.js'),
        controllerAs: 'vm',
        resolve: {
            mocks: function (mockService) {
                return mockService.getAll();
            }
        }
    });

    $routeProvider.when('/mocks/create', {
        template: require('./templates/create-template.html'),
        controller: require('./controllers/create-controller.js'),
        controllerAs: 'vm'
    });
});

mocksModule.service('mockService', require('./services/mock-service'));

mocksModule.constant('mockMethods', ['GET', 'POST', 'PUT', 'DELETE']);

module.exports = mocksModule.name;