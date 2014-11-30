define(['mainCtrl'], function(MainController) {

    var mainModule = angular.module('mainModule', ['myModule']);
    mainModule.controller('mainController', MainController);

});