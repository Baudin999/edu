
require.config({
    paths: {
        'angular': '../../../../bower_components/angular/angular',
        'mainModule': 'mainModule/mainModule',
        'myModule': 'myModule/myModule',
        'mainCtrl': 'mainModule/MainController'
    },
    shim: {
        'mainModule': {
            deps: [ 'angular', 'myModule' ]
        },
        'myModule' : {
            deps: [ 'angular' ]
        }
    }
});


define(['mainModule'], function() {
    angular.bootstrap(document, ['mainModule']);
});
