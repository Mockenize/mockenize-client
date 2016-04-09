module.exports = function (backupService, $route, $scope) {

    $scope.upload = function () {
        backupService.upload();
    };

    $scope.uploadFile = function(element) {
      document.getElementById("fileName").value = element.value;
    };


};
