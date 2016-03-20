'use strict'
/*
    Created by: Matthew Marcos
    CMSC 128 Assignment 03
*/

const PORT         = process.env.PORT || 5000;
const express      = require('express');
const _            = require('lodash');
const async        = require('async');
const path         = require('path');
const app          = express();

// Joining folders for discovery
app.use(express.static(path.join(__dirname, 'pulls/css')));
app.use(express.static(path.join(__dirname, 'pulls/js')));
app.use(express.static(path.join(__dirname, 'pulls')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.send('index');
});

app.get('*', (req, res) => {
    res.send('Notfound');
});

app.listen(PORT, _ => {
    console.log('Listening on port ' + PORT);
});
