module.exports = function (mockMethods) {
    var vm = this;
    vm.mockMethods = mockMethods;
    vm.mock = {
        method: 'GET',
        headers: [
            {
                key: 'Content-type',
                value: 'application/json'
            }
        ]
    };

};