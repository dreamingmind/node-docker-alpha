const debug = require('./app.js');

let s1 = Symbol('desc');
console.log(s1);
console.log(typeof s1);

let s2 = Symbol('desc');
console.log(s2);
console.log(typeof s2);

console.log(s1 === s2);



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


debug(Why);
debug(When);

console.log(Why[s1]);
console.log(Why.s1);
console.log(Why[s2]);
console.log(Why.s2);
console.log(When[s1]);
console.log(When.s1);
console.log(When[s2]);
console.log(When.s2);

Why.s1 = 99;
debug(Why);
console.log(Why[s1]);
