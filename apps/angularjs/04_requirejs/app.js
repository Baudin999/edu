
define([], function() {
    var app = angular.module('app', []);

   require(['./MainController'], function(MainController) {
       app.controller('mainController', MainController);
       angular.bootstrap(document, ['app']);
   });


});
