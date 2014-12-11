/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
define(["require", "exports"], function (require, exports) {
    var app = angular.module('app', []);
    var MainController = (function () {
        function MainController($scope) {
            $scope.title = 'Welcome';
        }
        MainController.$inject = ['$scope'];
        return MainController;
    })();
    app.controller('mainController', MainController);
    function init() {
        angular.bootstrap(document, ['app']);
    }
    exports.init = init;
    ;
});
//# sourceMappingURL=Application.js.map