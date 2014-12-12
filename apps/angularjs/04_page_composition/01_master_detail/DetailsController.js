

define([], function() {

    function DetailsController($scope) {
        $scope.title = 'Details';
    }
    DetailsController.$inject = ['$scope'];

    angular.module('app').controller('DetailsController', DetailsController);
});