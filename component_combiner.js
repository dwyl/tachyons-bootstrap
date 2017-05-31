var http = require('http');
// var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url.length === 1) {
    homeHandler(req, res);
  }
}).listen(8000);

function homeHandler (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
}
