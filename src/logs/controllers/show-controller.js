module.exports = function (log, logService, $location) {
    var vm = this;
    vm.log = log;

    vm.delete = function () {
        if (!confirm('Are you sure?')) {
            return;
        }

        logService.delete(log).then(function () {
            $location.path('/logs');
        });
    };
};