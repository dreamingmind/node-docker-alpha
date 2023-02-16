logger = require('./logger')

// logger.log(logger)
const app = require('./app.js');
logger.log('================== start output from symbol.js =========================');

logger.log(module.exports.staticObj);

let s1 = Symbol('desc');
logger.log(s1);
logger.log(typeof s1);

let s2 = Symbol('desc');
logger.log(s2);
logger.log(typeof s2);

logger.log(s1 === s2);



const Method = function (input) {
    this.input = input;
    this.desc = `the value was ${input}`;
    this.s1 = 'original';
    this["s2"] = 'original';
}

let Why = new Method('Why');
Why[s1] = () => 'a';
Why[s2] = () => 'a1';
let When = new Method('When');
When[s1] = 'b';
When[s2] = 'b1'


app.scanner(Why);
app.scanner(When);

logger.log(Why[s1]);
logger.log(Why.s1);
logger.log(Why[s2]);
logger.log(Why.s2);
logger.log(When[s1]);
logger.log(When.s1);
logger.log(When[s2]);
logger.log(When.s2);

Why.s1 = 99;
app.scanner(Why);
logger.log(Why[s1]());

logger.log(app.statObj);
reuse = Symbol.for('id');
logger.log(`compare the stored global symbol with a new local version
app.statObj.sym === reuse //${app.statObj.sym === reuse}`);
logger.log('================== end output from symbol.js =========================');
