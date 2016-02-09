module.exports = function (log, logService, $location) {
    var vm = this;
    vm.log = log;

    vm.save = function () {
        logService.save(vm.log).then(function () {
            $location.path('/logs');
        });
    };
};