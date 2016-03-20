'use strict'
const _ = require('lodash'),
    async = require('async'),
    fs = require('fs');
module.exports = (req, res, next) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream('index.html')
            .pipe(res);
    }
    else if (ext.test(req.url)) {
        fs.exists(path.join(__dirname, req.url), function (exists) {
            if (exists) {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                fs.createReadStream('index.html')
                    .pipe(res);
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                fs.createReadStream('404.html')
                    .pipe(res);
            });
        }
    }
    else {
        //  add a RESTful service
    }
};
//
// console.log(req.url);
// res.writeHeader(200, {
//     'Content-Type': 'text/html'
// });
// res.write('<p> I am cool </p>');
// res.end();
