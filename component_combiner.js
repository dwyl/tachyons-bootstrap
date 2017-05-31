var http = require('http');
var port = process.env.PORT || 8000;
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url.length === 1) {
    homeHandler(req, res);
  }
}).listen(port);

function homeHandler (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
}

module.exports = {
  init: server
};
