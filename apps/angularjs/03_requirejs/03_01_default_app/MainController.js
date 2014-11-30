

define([], function() {

    function MainController($scope) {
        $scope.title = 'This is how you can hook up requireJS!!';
    }
    MainController.$inject = ['$scope'];

    return MainController;
});