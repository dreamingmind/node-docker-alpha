const express = require('express');
// App
const app = express();
const router = express.Router();

logger = require('./logger')

console.log(logger);

logger.log('message');

let output = function() {
    return 'this is the output';
}

module.exports.output = output;

let x =-10;

logger.log(-x);
logger.log(x);

const Method = function (input) {
    this.input = input;
    this.desc = `the value was ${input}`;
}

let Why = new Method('Why');
let When = new Method('When');

logger.log(Why.desc);
logger.log(When.desc);
logger.log(typeof Why);
logger.log(typeof When);
logger.log(typeof Method);

const scanner = function(obj) {
    logger.log(`\n========`);
    for (prop in obj) {
        logger.log(prop + ': ' + obj[prop]);
    }
    logger.log("========\n");
}

scanner(Why);
scanner(When);

// for (let prop in router) {
//     if (true) {
//         console.log(prop);
//     }
// }


module.exports.scanner = scanner;

let thing = new Promise((resolve, reject) => {
    setTimeout(() => reject("done!"), 1000);
})
    .then((result)=>{
            console.log(`first resolve`);
            scanner(this);
            return 'result of first resolve';
        },
        (result)=>{
            console.log('first reject');
            scanner(this);
            return 'result of first reject';
        }
    );
thing
    .then((result)=>{
        console.log('second resolve');
        scanner(thing);
        return 'result of second resolve';
    },
        (result)=>{
            console.log('second reject');
            scanner(this);
            return 'result of second reject';
        }
    )
    .finally(()=>{
        console.log('final');
        scanner(this);
    })
;