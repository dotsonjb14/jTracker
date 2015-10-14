(function () {
    angular.module('myApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('tools', {
                    url: "/tools",
                    templateUrl: "partials/tools.html",
                    displayName: "Tools",
                    order: 2
                })
        });
})();