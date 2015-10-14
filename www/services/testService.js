(function () {
    angular.module('myApp')
        .factory('testService', function () {
            return {
                test: _test
            };

            function _test() {
                return angular.module('myApp.interfaces')._invokeQueue;
            }
        });
})();