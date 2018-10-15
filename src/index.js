var http = require('http');
const port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello world!");
    res.end();
}).listen(port);