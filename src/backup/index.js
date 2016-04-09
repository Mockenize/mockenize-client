var angular = require('angular');


var backupModule = angular.module('mk.backup', []);

backupModule.config(function ($routeProvider) {

    $routeProvider.when('/backup', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm'
    });

});

backupModule.service('backupService', require('./services/backup-service'));

module.exports = backupModule.name;
