(function () {
    angular.module('myApp')
        .controller('testController', function (fileService) {
            var vm = this;
            vm.test = fileService.test();
        });
})();