const express = require('express');
const router = express.Router();
const path = require('path');
const outputer = require("../app");
let counter = 0;

const objectReader = function(obj) {
    let output = "<ul>";

    for (prop in obj) {
        output += `<li>${prop}: ${obj[prop]}</li>`
    }

    output +="</ul>";
    return output;
}

router.get('/', (req, res) => {
    res.send(counter + "<h1>Hello World</h1><p> url: " + req.url + "</p> ");
    counter = counter + 1;
});

router.get('/*', (req, res) => {
    console.log(req);
    let outputer = require('../app');
    res.send(
        counter
        + "<h1>Brave New World </h1>"
        + "<p> url: " + req.url + "</p> "
        + "<p> params: " + objectReader(req.params) + "</p> "
        + "<p> query: " + objectReader(req.query) + "</p> "
        + "<p> method: " + req.method + "</p> "
        + '<p>' + outputer.output() + '</p>'
    );
    counter = counter + 1;
    outputer = null;
});

module.exports = router;
