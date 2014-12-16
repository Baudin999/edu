var express = require('express'),
    app = express();



app.get('/people', function (req, res) {
    var data = ['Carlos', 'Bjorn'];
    res.json(data);
});

app.post('/people', function (req, res) {
    var data = json.parse( req.body );
    res.end();
});

app.use(express.static(__dirname + '/'));
app.use(function(req, res) {
    res.status(404).send('Page not Found');
});
app.use('/', function (req, res) {
    res.writeHead(302, {'Location': '/CodeRunner.html'});
    res.end();
});


var server = app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening at http://localhost:1337')
});