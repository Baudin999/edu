define(["require", "exports"], function (require, exports) {
    var Application = (function () {
        function Application() {
            this.urls = [
                '/pages/01_introduction.html',
                '/pages/02_FunctionalProgramming.html',
                '/pages/03_DeclarativeProgramming.html',
                '/pages/07_Arrays.html',
                '/pages/04_ObjectOrientedProgramming.html',
                '/pages/05_Closures.html',
                '/pages/06_Logger.html',
                '/pages/angularjs/01_AngularJS.html'
            ];
            this.nextPage = function () {
                var index = this.pages.indexOf(this.currentpage);
                this.currentPage = this.pages[(index + 1) % this.pages.length];
            };
            this.pages = this.urls.map(function (url) { return new Page(url); });
        }
        return Application;
    })();
    var Page = (function () {
        function Page(url) {
        }
        return Page;
    })();
    return Page;
});
//# sourceMappingURL=Page.js.map