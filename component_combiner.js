var http = require('http');
var port = process.env.PORT || 8000;
var fs = require('fs');

var components = [
  '/components/typography.html',
  '/components/form.html',
  '/components/button.html',
  '/components/image.html',
  '/components/grid.html',
  '/components/code.html',
  '/components/table.html'
];

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    homeHandler(req, res);
  } else if (components.indexOf(req.url) > -1) {
    componentHandler(req, res);
  }
}).listen(port);

function homeHandler (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
}

function componentHandler (req, res) {
  var file = req.url.replace('/', '');
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile(file, function (err, data) {
    if (err) throw err;
    res.end(data);
  });
}

module.exports = {
  init: server
};
