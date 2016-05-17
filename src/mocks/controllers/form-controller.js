module.exports = function ($scope, mock, httpMethods, httpStatus, returnTypes, mockService, $location) {
    var vm = this;
    vm.httpMethods = httpMethods;
    vm.httpStatus = httpStatus;
    vm.returnTypes = returnTypes;
    vm.selectedHeader = {};
    vm.mock = mock;
    vm.lastBody = '';

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

    vm.updateReturnType = function(returnType) {
      if(!vm.lastBody && returnType == 'Javascript Code') {
        vm.lastBody = 'function func(url, body, jsonBody) { //TODO coding here }'
      }
      var tmp = vm.mock.body;
      vm.mock.body = vm.lastBody;
      vm.lastBody = tmp;
    };

};
