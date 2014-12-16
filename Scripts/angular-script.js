

var _output = [];
var printOutput = function(value) {
    "use strict";
    _output.push( value );
}

var app = angular.module('app', []);


app.controller('mainCtr', function ($scope, $timeout, $compile) {
    
    $scope.pages = [
        {
            title: 'JavaScript',
            children: [
                { title: 'Introduction', url: '/pages/01_introduction.html' },
                { title: 'Functional programming', url: '/pages/02_FunctionalProgramming.html' },
                { title: 'Declarative programming', url: '/pages/03_DeclarativeProgramming.html' },
                { title: 'Arrays', url: '/pages/07_Arrays.html' },
                { title: 'OOP', url: '/pages/04_ObjectOrientedProgramming.html' },
                { title: 'Closures', url: '/pages/05_Closures.html' }
            ]
        }, {
            title: 'Advanced JS',
            children: [
                { title: 'Logger', url: '/pages/06_Logger.html' },
                { title: 'Collections', url: '/pages/08_Collections.html' },
                { title: 'Currying', url: '/pages/09_Curry.html' }
            ]
        }, {
            title: 'AngularJS',
            children: [
                { title: 'MVC', url: '/pages/AngularJS/00_MVC.html' },
                { title: 'Introduction', url: '/pages/AngularJS/01_AngularJS.html' }
            ]
        }
    ];


    $timeout(function() {
        "use strict";
        $scope.selectedPage = JSON.parse(localStorage.getItem('selectedPage'));
        $scope.selectedChild = JSON.parse(localStorage.getItem('selectedChild')) || $scope.selectedPage.children[0];
    });
    
    $scope.selectPage = function (page) {
        "use strict";
        $scope.selectedPage = page;
        $scope.selectedChild = page.children[0];
        localStorage.setItem('selectedPage', JSON.stringify(page));
    };

    $scope.selectChildPage = function (child) {
        "use strict";
        $scope.selectedChild = child;
        localStorage.setItem('selectedChild', JSON.stringify(child));
    };


    $scope.contentLoaded = function() {
        "use strict";
        setTimeout(function() {
            "use strict";
            var btnShowContent = '<button type="button" data-ng-click="showOutput($event)" class="show-output">Show</button>';
            $('pre').each(function (index, pre) {
                if (!$(pre).hasClass('prettyprint')) {
                    var $pre = $(pre);
                    $pre.addClass('prettyprint linenums lang-js');
                    if (!$pre.hasClass( 'ignore' )) {

                        var el = angular.element(btnShowContent);
                        var compiled = $compile(el);
                        el.insertBefore($pre);
                        compiled($scope);
                    }
                }
            });
            prettyPrint();
        });
    };

    $scope.showOutput = function ($event) {
        "use strict";
        showOutput($event);
    };

    var showOutput = (function () {
        var output = $('.output');

        return function () {
            var text, result,
                args = Array.prototype.slice.call(arguments, 0);

            if(output.hasClass('show')) {
                output.removeClass('show');
                _output = [];
            }
            else {
                text = $($(args[0].currentTarget).next())[0].innerText;
                text = text.replace(/console.log\(/g,'printOutput(');
                result = eval(text);
                $('.message').html( _output.join(' <br /> ') );
                output.addClass('show');
            }
        };
    }());


    $scope.nextPage = function () {
        var currentPage = $scope.pages.indexOf($scope.selectedPage);
        if (currentPage === $scope.pages.length - 1) return;
        currentPage++;
        localStorage.setItem('currentPage', currentPage);
        currentCodeExample = 0;
        showContent( pages[currentPage] );
    };

    $(document).on('click', '.output', showOutput);
    
});


angular.bootstrap(document, ['app']);


window.onresize = function (event) {
    "use strict";

};