/**
 * Created by rwatanabe on 05/02/16.
 */
module.exports = function ($http, apiUrl, scriptService) {
    var baseUrl = apiUrl.concat('/_mockenize/mocks');

    this.getAll = function () {
        return $http.get(baseUrl).then(function (response) {
            angular.forEach(response.data, dehydrate);
            return response.data;
        });
    };

    this.getByKey = function (key) {
        return $http.get(baseUrl + '/' + key).then(function (response) {
            return dehydrate(response.data);
        });
    };

    this.delete = function (mock) {
        return $http.delete(baseUrl + '/' + mock.key);
    };

    this.deleteAll = function () {
        return $http.delete(baseUrl + '/all');
    };

    this.save = function (mock) {
        return $http.post(baseUrl, hydrate(mock)).then(function (response) {
            return dehydrate(response.data);
        });
    };

    function hydrate(obj) {
        var headers = {};
        _.forEach(obj.headers, function (header) {
            headers[header.key] = header.value;
        });
        obj.headers = headers;

        if (!headers['Content-Type']) {
            headers['Content-Type'] = "application/json";
        }

        if(obj.returnType == "JSCODE") {
          var scriptName = obj.method + '_' + obj.path.replace(/\//ig, '_')
          scriptService.save(scriptName, obj.body);
          obj.scriptName = scriptName;
        } else if(headers['Content-Type'] == "application/json" && obj.body) {
          try {
              obj.body = JSON.parse(obj.body);
          } catch (e) {
              console.warn("Invalid json body.");
          }
        }

        return obj;
    }

    function dehydrate(obj) {
        var headers = [];
        _.forOwn(obj.headers, function (value, key) {
            headers.push({
                key: key,
                value: value
            });
        });
        obj.headers = headers;
        obj.returnType = 'TEXT';

        if(obj.scriptName) {
          scriptService.getByKeySync(obj.scriptName).then(function(data) {
            obj.body = data;
          });
          obj.returnType = 'JSCODE';
        } else if(typeof(obj.body) == 'object') {
          obj.body = JSON.stringify(obj.body);
        }

        return obj;
    }
};
