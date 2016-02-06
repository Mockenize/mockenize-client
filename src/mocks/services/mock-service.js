/**
 * Created by rwatanabe on 05/02/16.
 */
module.exports = function ($http, apiUrl) {
    var baseUrl = apiUrl.concat('/manager/mocks');

    this.getAll = function () {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    };

    this.delete = function (mock) {
        return $http.delete(baseUrl + '/' + mock.id);
    };

    this.deleteAll = function () {
        return $http.delete(baseUrl);
    };
};