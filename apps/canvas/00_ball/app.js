var Circle = (function () {
    function Circle(x, y) {
        this.speed = 5;
        this.x_index = 1;
        this.y_index = 1;
        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#003300';
            ctx.stroke();
            if (this.x <= 0)
                this.x_index = 1;
            if (this.x >= document.body.clientWidth)
                this.x_index = -1;
            if (this.y <= 0)
                this.y_index = 1;
            if (this.y >= document.body.clientHeight)
                this.y_index = -1;
            this.x = this.x + this.x_index * this.speed;
            this.y = this.y + this.y_index * this.speed;
        };
        this.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
        this.x = x || 50;
        this.y = y || 50;
        this.x_index = Math.floor((Math.random() * 10) + 1) % 2 === 0 ? 1 : -1;
        this.y_index = Math.floor((Math.random() * 10) + 1) % 2 === 0 ? 1 : -1;
    }
    return Circle;
})();
var App = (function () {
    function App() {
        this.resize = function (event) {
            app.canvas.width = document.body.clientWidth;
            app.canvas.height = document.body.clientHeight;
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
        self.resize(null);
        window.addEventListener('resize', self.resize);
        self.circles = [];
        window.addEventListener('click', function (event) {
            self.circles.push(new Circle(event.clientX, event.clientY));
        });
    }
    return App;
})();
var app = new App();
app.run(app);
//# sourceMappingURL=app.js.map