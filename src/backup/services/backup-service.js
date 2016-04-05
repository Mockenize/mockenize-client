module.exports = function ($http, apiUrl) {
    var baseUrl = apiUrl.concat('/_mockenize/file');

    this.download = function () {
        return $http.get(baseUrl + "/download").then(function (response) {
            return response.data;
        });
    };

    this.upload = function (key) {
        return $http.post(baseUrl + "/upload").then(function (response) {
            return dehydrate(response.data);
        });
    };

};
