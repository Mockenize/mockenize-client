module.exports = function ($scope, mock, httpMethods, httpStatus, returnTypes, mockService, $location) {
    var vm = this;
    vm.httpMethods = httpMethods;
    vm.httpStatus = httpStatus;
    vm.returnTypes = returnTypes;
    vm.selectedHeader = {};
    vm.mock = mock;
    vm.lastBody = mock.body;

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

    $scope.$watch('vm.mock.returnType', function (value) {
        if(vm.mock.body != vm.lastBody) {
            var tmp = vm.mock.body;
            vm.mock.body = vm.lastBody;
            vm.lastBody = tmp;
        }
    });

};
