var http = require('http');
var listener = require('./listener.js')
const port = 3000;

let server = http.createServer(listener);
server.listen(port);

if (module.hot) {

    module.hot.accept('./listener.js', () => {
        var newListener = require('./listener.js');

        server.close(() => {
            server = http.createServer(newListener)
            server.listen(port);

            console.log("***Change detected and applied***");    
        });
    });
  }
