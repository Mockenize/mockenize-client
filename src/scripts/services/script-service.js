module.exports = function ($q, $http, apiUrl) {
    var baseUrl = apiUrl.concat('/_mockenize/scripts');

    this.getByKey = function (key) {
        return $http.get(baseUrl + '/name/' + key).then(function (response) {
            return response.data;
        });
    };

    this.getByKeySync = function (key) {
        var deferred = $q.defer();
        $http.get(baseUrl + '/name/' + key).then(function() {
          deferred.resolve(response.data);
        });
        return deferred.promise;
    };

    this.save = function (scriptName, scriptValue) {
        return $http.post(baseUrl + '/' + scriptName, scriptValue).then(function (response) {
            return response.data;
        });
    };

};
