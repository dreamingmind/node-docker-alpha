
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

module.exports = scanner;

