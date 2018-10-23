const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the caculator!');
    console.log('Please only use numbers and the basic computer operators, no fancy ones.');
    console.log('=========================================================================');
}

function getStringInputWithPrompt(prompt) {
    console.log(prompt);
    return readline.prompt();    
}

function getNumberInputWithPrompt(prompt) {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
    }while (isNaN(response));
    return response;
}

function getOperator() {
    return getStringInputWithPrompt('Please enter the operator you would like to use:');
}

function getNumberArray(operator) {
    const iterations = getNumberInputWithPrompt('Please enter the number of numbers you want to ' + operator + '?');
    let numbers = new Array(iterations);
    for (let egg = 0; egg < iterations; egg++) {
        numbers[egg] = getNumberInputWithPrompt('Please enter number ' + (egg + 1) + ':');
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    let answer = numbers[0];
    for (let egg = 1; egg < numbers.length; egg++){
        if (operator === '+') {
           answer += numbers[egg];
        }else if (operator === '-') {
           answer -= numbers[egg];
        }else if (operator === '*') {
           answer *= numbers[egg];
        }else if (operator === '/') {
           answer /= numbers[egg];
        }
    }
    return answer;
}

function performOneCalculation() {
    var operator = getOperator();
    var numbers = getNumberArray(operator);
    var answer = calculateAnswer(operator, numbers);

    console.log('Here is the answer ' +answer);
}

printWelcomeMessage();
while (true) {
    performOneCalculation();
}