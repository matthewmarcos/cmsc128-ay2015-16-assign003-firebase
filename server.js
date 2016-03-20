'use strict'
const
    PORT = process.env.PORT || 5000,
    _ = require('lodash'),
    async = require('async'),
    express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.send('index');
});

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});
