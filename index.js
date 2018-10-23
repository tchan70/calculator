console.log('Welcome to the caculator!');
console.log('Please only use numbers and the basic computer operators, no fancy ones.')
const readline = require('readline-sync');
console.log('Please enter your operator:');
const operator = readline.prompt();
console.log('Please enter the number of numbers you want to ' +operator +'?');
const numberofarguments = readline.prompt();
const numberofnumbers = +numberofarguments
let numbers = new Array(numberofnumbers);
for (let egg = 0; egg < numberofnumbers; egg++) {
    console.log('Please enter number ' + (egg + 1) + ':');
    const argument = readline.prompt();
    numbers[egg] = +argument;
}
let answer = numbers[0];
for (let egg = 1; egg < numberofnumbers; egg++){
if (operator === '+') {
    answer += numbers[egg]
}else if (operator === '-') {
    answer -= numbers[egg]
}else if (operator === '*') {
    answer *= numbers[egg]
}else if (operator === '/') {
    answer /= numbers[egg]
}
}
console.log('Here is the answer ' +answer);
