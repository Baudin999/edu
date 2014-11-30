/// <reference path="../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app = angular.module('app', []);
var MainController = (function () {
    function MainController($scope, titleFactory, descriptionService) {
        $scope.title = titleFactory.title;
        $scope.description = descriptionService.description;
    }
    MainController.$inject = ['$scope', 'titleFactory', 'descriptionService'];
    return MainController;
})();
app.controller('mainController', MainController);
var TitleFactory = (function () {
    function TitleFactory() {
        this.title = 'From the factory!!';
    }
    TitleFactory.$factory = function () { return new TitleFactory(); };
    return TitleFactory;
})();
app.factory('titleFactory', TitleFactory.$factory);
var DescriptionService = (function () {
    function DescriptionService() {
        this.description = 'This is the description from the descriptionService!!';
    }
    return DescriptionService;
})();
app.service('descriptionService', DescriptionService);
//# sourceMappingURL=app.js.map