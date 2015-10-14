(function () {
    angular.module('myApp')
        .controller('homeController', function (fileService) {
            var vm = this;
            vm.title = 'Home';
        });
})();