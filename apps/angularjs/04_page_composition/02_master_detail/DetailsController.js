

define([], function() {

    function DetailsController($scope) {
        $scope.detailsTitle = 'Details';
    }
    DetailsController.$inject = ['$scope'];

    angular.module('app').controller('DetailsController', DetailsController);
});