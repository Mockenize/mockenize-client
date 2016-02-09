/**
 * Created by rwatanabe on 05/02/16.
 */
var _ = require('lodash');

module.exports = function (proxies, proxyService, apiUrl) {
    var vm = this;
    vm.apiUrl = apiUrl;
    vm.proxies = proxies;

    vm.deleteAll = function () {
        if (confirm('Are you sure?')) {
            proxyService.deleteAll().then(function () {
                vm.proxies = [];
            });
        }
    };

    vm.deleteProxy = function (proxy) {
        if (confirm('Are you sure?')) {
            proxyService.delete(proxy).then(function () {
                vm.proxies = _.without(vm.proxies, proxy);
            });
        }
    };
};