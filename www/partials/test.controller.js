(function () {
    angular.module('myApp')
        .controller('testController', function (fileService, interfaceService) {
            var vm = this;
            vm.test = fileService.test();

            function testFunc(testInterface) {
                this.test = testInterface;
            }

            var s = interfaceService.getInterface("test");
            console.log(s);
            //var injector = angular.injector(['ng', 'myApp.interfaces']);
            //console.log(injector.instantiate(testFunc).test.test());
        });
})();