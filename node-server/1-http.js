const http = require('http');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incomming...');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write('Welcome!');
    res.end();
});

server.listen(8080);