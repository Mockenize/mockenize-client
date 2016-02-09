/**
 * Created by rwatanabe on 05/02/16.
 */
var _ = require('lodash');

module.exports = function (logs, logService, apiUrl) {
    var vm = this;
    vm.apiUrl = apiUrl;
    vm.logs = logs;

    vm.deleteAll = function () {
        if (confirm('Are you sure?')) {
            logService.deleteAll().then(function () {
                vm.logs = [];
            });
        }
    };

    vm.deleteLog = function (log) {
        if (confirm('Are you sure?')) {
            logService.delete(log).then(function () {
                vm.logs = _.without(vm.logs, log);
            });
        }
    };
};