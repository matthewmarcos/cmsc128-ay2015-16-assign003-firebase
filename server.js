'use strict'

const http = require('http'),
    fs = require('fs'),
    PORT = process.env.PORT || 4500;


function start() {
    let server,
        indexHtml;

    fs.readFile('./public/index.html', (err, data) => {
        if(err) {
            throw err;
        }
        indexHtml = data;
    })

    server = http.createServer((req, res, next) => {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(indexHtml);
        res.end();
   });

    server.listen(PORT, _ => {
        console.log('Listening at port ' + PORT);

    });
}

start();
