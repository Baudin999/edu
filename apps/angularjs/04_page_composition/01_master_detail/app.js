
require.config({
    paths: {
        'angular': '../../../../bower_components/angular/angular'
    }
});


define(['angular'], function() {
    var app = angular.module('app', []);

   require(['./MainController', './MasterController', './DetailsController'], function(MainController) {
       app.controller('mainController', MainController);
       angular.bootstrap(document, ['app']);
   });


});
