var http = require('http');
//var dt = require('./firstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + dt.myDateTime());
  // res.write("Hello World! ")
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8082);