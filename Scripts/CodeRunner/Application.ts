/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />


var app = angular.module('app', []);

class MainController {
    constructor($scope) {
        $scope.title = 'Welcome';
    }

    static $inject = ['$scope'];
}

app.controller('mainController', MainController);

export function init() {
    angular.bootstrap(document, ['app']);
};