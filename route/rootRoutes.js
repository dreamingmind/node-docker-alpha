const express = require('express');
const router = express.Router();
const path = require('path');
const outputer = require("../app");

router.get('/', (req, res) => {
    res.send(counter + "<h1>Hello World</h1><p> url: " + req.url + "</p> ");
    counter = counter + 1;
});

router.get('/*', (req, res) => {
    console.log(req);
    // let outputer = require('./app');
    // res.send(
    //     counter
    //     + "<h1>Brave New World </h1>"
    //     + "<p> url: " + req.url + "</p> "
    //     + '<p>' + outputer.output() + '</p>'
    // );
    // counter = counter + 1;
    // outputer = null;
});

module.exports = router;
