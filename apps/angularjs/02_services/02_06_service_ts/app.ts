/// <reference path="../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

var app = angular.module('app', []);


class MainController {
    constructor($scope, titleFactory, descriptionService) {
        $scope.title = titleFactory.title;
        $scope.description = descriptionService.description;
    }

    static $inject = ['$scope', 'titleFactory', 'descriptionService'];
}
app.controller('mainController', MainController);

class TitleFactory {
    title:string;
    constructor() {
        this.title = 'From the factory!!';
    }

    static $factory = () => new TitleFactory();
}
app.factory('titleFactory', TitleFactory.$factory);

class DescriptionService {
    description:string;
    constructor() {
        this.description = 'This is the description from the descriptionService!!';
    }
}


app.service('descriptionService', DescriptionService);
