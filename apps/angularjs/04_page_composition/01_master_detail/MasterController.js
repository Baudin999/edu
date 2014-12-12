

define([], function() {

    function MasterController($scope) {
        $scope.masterTitle = 'Master';
    }
    MasterController.$inject = ['$scope'];

    angular.module('app').controller('MasterController', MasterController);
});