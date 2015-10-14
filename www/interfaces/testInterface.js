angular.module('myApp').run(function (interfaceService) {
    interfaceService.registerInterface("test", function () {
        return {
            test: null,
            getChapters: _getChapters,
            getChapter: _getChapter,
            getDonateLink: _getDonateLink,
            extraOptions: null
        };

        function _getChapters() {

        }

        function _getChapter() {

        }

        function _getDonateLink() {

        }
    });
});