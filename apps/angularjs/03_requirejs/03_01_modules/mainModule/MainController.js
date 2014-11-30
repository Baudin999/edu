

define(function() {

    function MainController($scope, mainTitle) {
        $scope.title = mainTitle;
    }
    MainController.$inject = ['$scope', 'mainTitle'];

    return MainController;

});