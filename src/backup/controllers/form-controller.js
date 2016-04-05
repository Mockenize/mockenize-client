module.exports = function (fileService, $location) {
    var vm = this;

    vm.upload = function () {
        fileService.download().then(function () {
            $location.path('/backup');
        });
    };
};
