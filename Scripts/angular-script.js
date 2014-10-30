

var app = angular.module('app', []);


app.controller('mainCtr', function ($scope) {
    
    $scope.pages = [
        { title: 'Intro', url: '/pages/01_introduction.html' },
        { title: 'Func', url: '/pages/02_FunctionalProgramming.html' },
        { title: 'Dec', url: '/pages/03_DeclarativeProgramming.html' },
        { title: 'Arrays', url: '/pages/07_Arrays.html' },
        { title: 'OOP', url: '/pages/04_ObjectOrientedProgramming.html' },
        { title: 'Closures', url: '/pages/05_Closures.html' },
        { title: 'Logger', url: '/pages/06_Logger.html' },
        { title: 'AJS Intro', url: '/pages/08_AngularJS.html' },
    ];
    
    $scope.selectPage = function (page) {
        showPageByUrl( page.url );
    };
    
});


angular.bootstrap(document, ['app']);