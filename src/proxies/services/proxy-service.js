/**
 * Created by rwatanabe on 05/02/16.
 */
module.exports = function ($http, apiUrl) {
    var baseUrl = apiUrl.concat('/_proxies');

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

    this.delete = function (proxy) {
        return $http.delete(baseUrl + '/' + proxy.key);
    };

    this.deleteAll = function () {
        return $http.delete(baseUrl);
    };

    this.save = function (proxy) {
        return $http.post(baseUrl, proxy).then(function (response) {
            return response.data;
        });
    };
};