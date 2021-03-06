var Circle = (function () {
    function Circle(x, y) {
        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#003300';
            ctx.stroke();
        };
        this.x = x || 50;
        this.y = y || 50;
    }
    return Circle;
})();
var App = (function () {
    function App() {
        this.resize = function () {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
        };
        this.run = function (app) {
            app.context.clearRect(0, 0, app.canvas.width, app.canvas.height);
            app.circles.forEach(function (circle) {
                circle.draw(app.context);
            });
            window.requestAnimationFrame(function () {
                app.run(app);
            });
        };
        var self = this;
        self.canvas = document.createElement('canvas');
        self.context = this.canvas.getContext('2d');
        window.document.body.appendChild(self.canvas);
        self.resize();
        window.addEventListener('resize', self.resize);
        self.circles = [];
        self.circles.push(new Circle());
        self.canvas.addEventListener('click', function (event) {
            console.log(event.x + ', ' + event.y);
        });
    }
    return App;
})();
var app = new App();
app.run(app);
//# sourceMappingURL=app.js.map