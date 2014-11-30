
define([], function() {

    var myModule = angular.module('myModule', []);

    myModule.value('mainTitle', 'This is the main controller inside of the \'main\' module! This text comes from the mainTitle value inside the myModule');

});