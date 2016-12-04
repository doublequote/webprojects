var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

nunjucks.configure('templates', { autoescape: true, express: app, watch: true });

app.get('/landing', function (req, res) {
  res.render("index.html", { foo: 'bar' });
});

app.use(express.static('resources'));

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
