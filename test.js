const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  let pathname = url.parse(req.url);

  if (pathname != '/favicon.ico') {
    console.log(pathname, 'pathname');
  }
}).listen(3000)

