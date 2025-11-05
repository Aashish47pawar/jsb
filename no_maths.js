console.log("aashish")

const score = 400
console.log(score);

const balance = new Number(343)
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance))
console.log(balance.toString().length);
console.log(balance.toFixed(4));

const aashino = 123.8954
console.log(aashino.toPrecision(5));

const hundreds = 1234780
console.log(hundreds.toLocaleString()); // international no.
console.log(hundreds.toLocaleString('en-IN')); // indian no.

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random())
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1) + min))
