

define([], function() {

    function MainController($scope) {
        $scope.title = 'Master/Detail';
    }
    MainController.$inject = ['$scope'];

    return MainController;
});