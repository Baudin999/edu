


class Application {
    urls: string[] = [
        '/pages/01_introduction.html',
        '/pages/02_FunctionalProgramming.html',
        '/pages/03_DeclarativeProgramming.html',
        '/pages/07_Arrays.html',
        '/pages/04_ObjectOrientedProgramming.html',
        '/pages/05_Closures.html',
        '/pages/06_Logger.html',
        '/pages/angularjs/01_AngularJS.html'
    ];
    pages:Page[];
    currentPage: Page;
    constructor() {
        this.pages = this.urls.map((url) => new Page(url));
    }

    nextPage = function() {
        var index = this.pages.indexOf(this.currentpage);
        this.currentPage = this.pages[(index + 1) % this.pages.length];
    }
}

class Page {
    constructor(url:string) {

    }
}

export = Page;