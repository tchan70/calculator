console.log('Welcome to the caculator!');
const readline = require('readline-sync');
console.log('Please enter some numbers:');
console.log('Please enter your first number')
const firstargument = readline.prompt();
const firstnumber = +firstargument;
console.log('Please enter your second number')
const secondargument = readline.prompt();
const secondnumber = +secondargument;
const answer = firstnumber * secondnumber;
console.log('Here is the answer ' +answer);
