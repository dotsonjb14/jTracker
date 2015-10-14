(function () {
    angular.module('myApp')
        .directive("jtSidebarMenu", function () {
            return {
                restrict: "AE",
                templateUrl: "directives/jtSidebarMenu.html",
                controller: function ($scope, $state) {
                    $scope.states = $state.get();
                }
            }
        });
})();