

define([], function() {

    function MasterController($scope) {
        $scope.people = [
            { firstName: 'Carlos', lastName: 'Kelkboom', age: 35},
            { firstName: 'Alicia', lastName: 'Kelkboom', age: 21},
            { firstName: 'Vincent', lastName: 'Dercksen', age: 32},
            { firstName: 'Gijs', lastName: 'Ysberg', age: 37},
            { firstName: 'Klaas', lastName: 'Taal', age: 31},
            { firstName: 'Peter', lastName: 'Taal', age: 31},
            { firstName: 'Peter', lastName: 'Kolsters', age: 32}
        ];
        $scope.selectPerson = function(person) { $scope.selectedPerson = person; };
    }
    MasterController.$inject = ['$scope'];

    angular.module('app').controller('MasterController', MasterController);
});