/**
 * Created by rwatanabe on 08/02/16.
 */
var _ = require('lodash');


module.exports = function (httpStatus) {
    return function (value) {
        var status = _.find(httpStatus, { code: value });
        return status.label || 'Unknown Status';
    };
};