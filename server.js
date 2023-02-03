'use strict';

const express = require('express');
const {request} = require("express");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.request.url
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><p> url: " + req.url + "</p> ");

});

app.get('/index', (req, res) => {
    res.send("<h1>Brave New World </h1><p> url: " + req.url + "</p> ");

});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});