var http = require('http');
var listener = require('./listener.js')
const port = 3000;

let server = http.createServer(listener);
server.listen(port);

if (module.hot) {

    module.hot.accept('./listener.js', () => {
        console.log("***Change detected but not applied***");
    });
  }
