/**
 * Created by rwatanabe on 05/02/16.
 */
module.exports = function ($http, apiUrl) {
    var baseUrl = apiUrl.concat('/_mockenize/logs');

    this.getAll = function () {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    };

    this.getByKey = function (key) {
        return $http.get(baseUrl + '/' + key).then(function (response) {
            return response.data;
        });
    };

    this.delete = function (log) {
        return $http.delete(baseUrl + '/' + log.key);
    };

    this.deleteAll = function () {
        return $http.delete(baseUrl + '/all');
    };

    this.save = function (log) {
        return $http.post(baseUrl, log).then(function (response) {
            return response.data;
        });
    };
};
