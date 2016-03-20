'use strict'
/*
    Created by: Matthew Marcos
    CMSC 128 Assignment 03
*/

const PORT         = process.env.PORT || 5000,
      express      = require('express'),
      async        = require('async'),
      path         = require('path'),
      _            = require('lodash'),
      app          = express();

app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
    res.send('index');
});

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});
