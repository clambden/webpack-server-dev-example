
module.exports = function listener(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello everyone!");
    res.end();
}