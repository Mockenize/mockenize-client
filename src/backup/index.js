var angular = require('angular');


var logsModule = angular.module('mk.backup', []);

logsModule.config(function ($routeProvider) {

    $routeProvider.when('/backup', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm'
    });

});

logsModule.service('backupService', require('./services/backup-service'));

module.exports = logsModule.name;
