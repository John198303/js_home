'use strict';

let oneNumber = parseFloat(prompt('Введите первое число'));
let twoNumber = parseFloat(prompt('Введите второе число'));
let operation = prompt('Какое арифметическое действие нужно произвести с числами? \n +  -  /  *');

/**
 * Суммирование операндов
 */
function getSum(a, b) {
    return a + b;
}


/**
 * Вычитание операндов
 */
function getDeduction(a, b) {
    let minus = a - b;
    return minus;
}


/**
 * Деление операндов
 */
function getDivide(a, b) {
    let divide = a / b;
    return divide;
}


/**
 * Умножение операндов
 */
function getMultiply(a, b) {
    let multiply = a * b;
    return multiply;
}


/**
 *
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            let sum = getSum(arg1, arg2);
            return sum;
        case '-':
            let minus = getDeduction(arg1, arg2);
            return minus;
        case '/':
            let divide = getDivide(arg1, arg2);
            return divide;
        case '*':
            let multiply = getMultiply(arg1, arg2)
            return multiply;
        default:
            return 'введите один из четырех операторов: +  -  /  *';
    }

}

let total = mathOperation(oneNumber, twoNumber, operation);
alert(total);