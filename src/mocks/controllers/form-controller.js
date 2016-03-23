module.exports = function (mock, httpMethods, httpStatus, mockService, $location) {
    var vm = this;
    vm.httpMethods = httpMethods;
    vm.httpStatus = httpStatus;
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
