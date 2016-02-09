/**
 * Created by rwatanabe on 05/02/16.
 */
var angular = require('angular');


var proxiesModule = angular.module('mk.proxies', []);

proxiesModule.config(function ($routeProvider) {

    $routeProvider.when('/proxies', {
        template: require('./templates/list-template.html'),
        controller: require('./controllers/list-controller.js'),
        controllerAs: 'vm',
        resolve: {
            proxies: function (proxyService) {
                return proxyService.getAll();
            }
        }
    });

    $routeProvider.when('/proxies/create', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm',
        resolve: {
            proxy: function () {
                return {
                    method: 'GET',
                    responseCode: 200,
                    timeout: 0,
                    minTimeout: 0,
                    maxTimeout: 0,
                    headers: [
                        {
                            key: 'Content-type',
                            value: 'application/json'
                        }
                    ]
                }
            }
        }
    });

    $routeProvider.when('/proxies/edit/:proxyKey', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm',
        resolve: {
            proxy: function (proxyService, $route) {
                var proxyKey = $route.current.params.proxyKey;
                return proxyService.getByKey(proxyKey);
            }
        }
    });
});

proxiesModule.service('proxyService', require('./services/proxy-service'));

module.exports = proxiesModule.name;