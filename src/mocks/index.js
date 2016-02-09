/**
 * Created by rwatanabe on 05/02/16.
 */
var angular = require('angular');


var mocksModule = angular.module('mk.mocks', []);

mocksModule.config(function ($routeProvider) {

    $routeProvider.when('/mocks', {
        template: require('./templates/list-template.html'),
        controller: require('./controllers/list-controller.js'),
        controllerAs: 'vm',
        resolve: {
            mocks: function (mockService) {
                return mockService.getAll();
            }
        }
    });

    $routeProvider.when('/mocks/create', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm',
        resolve: {
            mock: function () {
                return {
                    method: 'GET',
                    responseCode: 200,
                    timeout: 0,
                    minTimeout: 0,
                    maxTimeout: 0,
                    headers: [
                        {
                            key: 'Content-type',
                            value: 'application/json'
                        }
                    ]
                }
            }
        }
    });

    $routeProvider.when('/mocks/edit/:key', {
        template: require('./templates/form-template.html'),
        controller: require('./controllers/form-controller.js'),
        controllerAs: 'vm',
        resolve: {
            mock: function (mockService, $route) {
                var key = $route.current.params.key;
                return mockService.getByKey(key);
            }
        }
    });
});

mocksModule.service('mockService', require('./services/mock-service'));

mocksModule.constant('mockMethods', ['GET', 'POST', 'PUT', 'DELETE']);

mocksModule.constant('mockResponseCodes', [
    { code: 100, label: "100 CONTINUE" },
    { code: 101, label: "101 SWITCHING_PROTOCOLS" },
    { code: 102, label: "102 PROCESSING" },
    { code: 103, label: "103 CHECKPOINT" },
    { code: 200, label: "200 OK" },
    { code: 201, label: "201 CREATED" },
    { code: 202, label: "202 ACCEPTED" },
    { code: 203, label: "203 NON_AUTHORITATIVE_INFORMATION" },
    { code: 204, label: "204 NO_CONTENT" },
    { code: 205, label: "205 RESET_CONTENT" },
    { code: 206, label: "206 PARTIAL_CONTENT" },
    { code: 207, label: "207 MULTI_STATUS" },
    { code: 208, label: "208 ALREADY_REPORTED" },
    { code: 226, label: "226 IM_USED" },
    { code: 300, label: "300 MULTIPLE_CHOICES" },
    { code: 301, label: "301 MOVED_PERMANENTLY" },
    { code: 302, label: "302 MOVED_TEMPORARILY" },
    { code: 303, label: "303 SEE_OTHER" },
    { code: 304, label: "304 NOT_MODIFIED" },
    { code: 305, label: "305 USE_PROXY" },
    { code: 307, label: "307 TEMPORARY_REDIRECT" },
    { code: 308, label: "308 PERMANENT_REDIRECT" },
    { code: 400, label: "400 BAD_REQUEST" },
    { code: 401, label: "401 UNAUTHORIZED" },
    { code: 402, label: "402 PAYMENT_REQUIRED" },
    { code: 403, label: "403 FORBIDDEN" },
    { code: 404, label: "404 NOT_FOUND" },
    { code: 405, label: "405 METHOD_NOT_ALLOWED" },
    { code: 406, label: "406 NOT_ACCEPTABLE" },
    { code: 407, label: "407 PROXY_AUTHENTICATION_REQUIRED" },
    { code: 408, label: "408 REQUEST_TIMEOUT" },
    { code: 409, label: "409 CONFLICT" },
    { code: 410, label: "410 GONE" },
    { code: 411, label: "411 LENGTH_REQUIRED" },
    { code: 412, label: "412 PRECONDITION_FAILED" },
    { code: 413, label: "413 PAYLOAD_TOO_LARGE" },
    { code: 414, label: "414 URI_TOO_LONG" },
    { code: 415, label: "415 UNSUPPORTED_MEDIA_TYPE" },
    { code: 416, label: "416 REQUESTED_RANGE_NOT_SATISFIABLE" },
    { code: 417, label: "417 EXPECTATION_FAILED" },
    { code: 418, label: "418 I_AM_A_TEAPOT" },
    { code: 419, label: "419 INSUFFICIENT_SPACE_ON_RESOURCE" },
    { code: 420, label: "420 METHOD_FAILURE" },
    { code: 421, label: "421 DESTINATION_LOCKED" },
    { code: 422, label: "422 UNPROCESSABLE_ENTITY" },
    { code: 423, label: "423 LOCKED" },
    { code: 424, label: "424 FAILED_DEPENDENCY" },
    { code: 426, label: "426 UPGRADE_REQUIRED" },
    { code: 428, label: "428 PRECONDITION_REQUIRED" },
    { code: 429, label: "429 TOO_MANY_REQUESTS" },
    { code: 431, label: "431 REQUEST_HEADER_FIELDS_TOO_LARGE" },
    { code: 500, label: "500 INTERNAL_SERVER_ERROR" },
    { code: 501, label: "501 NOT_IMPLEMENTED" },
    { code: 502, label: "502 BAD_GATEWAY" },
    { code: 503, label: "503 SERVICE_UNAVAILABLE" },
    { code: 504, label: "504 GATEWAY_TIMEOUT" },
    { code: 505, label: "505 HTTP_VERSION_NOT_SUPPORTED" },
    { code: 506, label: "506 VARIANT_ALSO_NEGOTIATES" },
    { code: 507, label: "507 INSUFFICIENT_STORAGE" },
    { code: 508, label: "508 LOOP_DETECTED" },
    { code: 509, label: "509 BANDWIDTH_LIMIT_EXCEEDED" },
    { code: 510, label: "510 NOT_EXTENDED" },
    { code: 511, label: "511 NETWORK_AUTHENTICATION_REQUIRED" }
]);

module.exports = mocksModule.name;