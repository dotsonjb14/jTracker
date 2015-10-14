(function () {
    angular.module('myApp')
        .factory('interfaceService', function () {
            var iList = {};

            return {
                test: _test,
                registerInterface: _registerInterface,
                getInterface: _getInterface
            };

            function _test() {
                return angular.module('myApp.interfaces')._invokeQueue;
            }

            function _registerInterface(interfaceName, func) {
                iList[interfaceName] = func;
            }

            function _getInterface(interfaceName) {
                var injector = angular.injector(['ng', 'myApp']);
                var instance = injector.instantiate(iList[interfaceName]);
                return instance;
            }
        });
})();