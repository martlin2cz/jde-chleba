var generator = require('./js/generator.js');

var pastries = ["Lorem", "Ipsum", "Dolor"];
var spreads =  ["", "foo", "bar"];


var result = generator.generate(pastries, spreads);

console.log(result);
