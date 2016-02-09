module.exports = function (proxy, proxyService, $location) {
    var vm = this;
    vm.proxy = proxy;

    vm.save = function () {
        proxyService.save(vm.proxy).then(function () {
            $location.path('/proxies');
        });
    };
};