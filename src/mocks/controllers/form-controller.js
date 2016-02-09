module.exports = function (mock, mockMethods, mockResponseCodes, mockService, $location) {
    var vm = this;
    vm.mockMethods = mockMethods;
    vm.mockResponseCodes = mockResponseCodes;
    vm.selectedHeader = {};
    vm.mock = mock;

    vm.addHeader = function () {
        vm.mock.headers.push(vm.selectedHeader);
        vm.selectedHeader = {};
    };

    vm.removeHeader = function (header) {
        vm.mock.headers = _.without(vm.mock.headers, header);
    };

    vm.save = function () {
        mockService.save(vm.mock).then(function () {
            $location.path('/mocks');
        });
    };
};