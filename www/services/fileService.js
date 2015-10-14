/**
 * This file controls all access to the virtual file system.
 *
 * If the application is run in a web server, it will use local storage.
 *
 * If the application is in node-webkit it will use the node filesystem plugin.
 */

(function () {
    angular.module('myApp')
        .factory('fileService', function () {
            return {
                test: _test,
                getFile: _getFile,
                writeFile: _writeFile
            };

            function _test() {
                return 'test231'
            }

            function _getFile(fileName) {

            }

            function _writeFile(fileName, contents) {

            }
        });
})();