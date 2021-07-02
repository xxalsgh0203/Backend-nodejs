const http = require('http');
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    // console.log('incomming...');
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    if(url == '/'){

        const read = fs.createReadStream('./html/index.html');
        read.pipe(res);
    }
    else if(url == '/courses'){
        const read = fs.createReadStream('./html/courses.html');
        read.pipe(res);
    }
    else{
        const read = fs.createReadStream('./html/not-found.html');
        read.pipe(res);
    }
    // res.write('Welcome!');
    // res.end();
});

server.listen(8080);