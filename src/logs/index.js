/**
 * Created by rwatanabe on 05/02/16.
 */
var angular = require('angular');


var logsModule = angular.module('mk.logs', []);

logsModule.config(function ($routeProvider) {

    $routeProvider.when('/logs', {
        template: require('./templates/list-template.html'),
        controller: require('./controllers/list-controller.js'),
        controllerAs: 'vm',
        resolve: {
            logs: function (logService) {
                return logService.getAll();
            }
        }
    });

    $routeProvider.when('/logs/show/:logKey', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm',
        resolve: {
            log: function (logService, $route) {
                var logKey = $route.current.params.logKey;
                return logService.getByKey(logKey);
            }
        }
    });
});

logsModule.service('logService', require('./services/log-service'));

module.exports = logsModule.name;