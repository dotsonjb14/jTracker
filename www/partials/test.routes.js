(function () {
    angular.module('myApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('test', {
                    url: "/test",
                    templateUrl: "partials/test.html",
                    order: 99
                })
        });
})();