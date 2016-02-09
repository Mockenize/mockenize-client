/**
 * Created by rwatanabe on 05/02/16.
 */
module.exports = function () {
    return {
        restrict: 'E',
        template: require('./navbar-template.html'),
        controller: function ($scope, $location) {
            $scope.isRoute = function (path) {
                return $location.path().startsWith(path);
            };
        }
    };
};