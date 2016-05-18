module.exports = function ($q, $http, apiUrl) {
    var baseUrl = apiUrl.concat('/_mockenize/scripts');

    this.getByKey = function (key) {
        return $http.get(baseUrl + '/name/' + key, {'Accept' : 'text/plain'}).then(function (response) {
            return response.data;
        });
    };

    this.getByKeySync = function (key) {
        var deferred = $q.defer();
        $http.get(baseUrl + '/name/' + key, {'Accept' : 'text/plain'}).then(function(response) {
          deferred.resolve(response.data);
        });
        return deferred.promise;
    };

    this.save = function (scriptName, scriptValue) {
        return $http(
          {
            method : 'POST',
            url : baseUrl + '/' + scriptName,
            data : scriptValue,
            headers : {
              'Content-Type' : 'text/plain'
            }
          }).then(function (response) {
            return response.data;
        });
    };

};
