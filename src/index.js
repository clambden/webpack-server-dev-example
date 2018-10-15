var http = require('http');
var listener = require('./listener.js')
const port = 3000;

http.createServer(listener).listen(port);