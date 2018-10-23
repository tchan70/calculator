console.log('Welcome to the caculator!');
const readline = require('readline-sync');
console.log('Please enter your operator:');
const operator = readline.prompt();
console.log('Please enter your first number')
const firstargument = readline.prompt();
const firstnumber = +firstargument;
console.log('Please enter your second number')
const secondargument = readline.prompt();
const secondnumber = +secondargument;
let answer = 0;
if (operator === '+') {
    answer = firstnumber + secondnumber
}else if (operator === '-') {
    answer = firstnumber - secondnumber
}else if (operator === '*') {
    answer = firstnumber * secondnumber
}else if (operator === '/') {
    answer = firstnumber / secondnumber
}
console.log('Here is the answer ' +answer);
