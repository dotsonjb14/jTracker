(function () {
    angular.module('myApp', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "partials/home.html",
                    displayName: "Home",
                    order: 1,
                    controller: 'homeController',
                    controllerAs: 'vm'
                })
        });
})();