/**
 * Created by rwatanabe on 08/02/16.
 */
var _ = require('lodash');


module.exports = function () {
    return function (value, length) {
        return _.padEnd(value, length);
    };
};