/**
 * Created by rwatanabe on 05/02/16.
 */
var _ = require('lodash');

module.exports = function (mocks, mockService) {
    var vm = this;
    vm.mocks = mocks;

    vm.deleteAll = function () {
        if (confirm('Are you sure?')) {
            mockService.deleteAll().then(function () {
                vm.mocks = [];
            });
        }
    };

    vm.deleteMock = function (mock) {
        if (confirm('Are you sure?')) {
            mockService.delete(mock).then(function () {
                vm.mocks = _.without(vm.mocks, mock);
            });
        }
    };
};