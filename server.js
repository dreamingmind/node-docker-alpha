'use strict';

const express = require('express');
const {request} = require("express");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
let counter = 0;
app.request.url


app.get('/', (req, res) => {
    res.send(counter + "<h1>Hello World</h1><p> url: " + req.url + "</p> ");
    counter = counter + 1;
});

app.get('/index', (req, res) => {
    let outputer = require('./app');
    res.send(
        counter
        + "<h1>Brave New World </h1>"
        + "<p> url: " + req.url + "</p> "
        + '<p>' + outputer.output() + '</p>'
    );
    counter = counter + 1;
    outputer = null;
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});