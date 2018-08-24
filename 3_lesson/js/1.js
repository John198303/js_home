'use strict';

let number = 0;
let word;

do {
    if (number === 0) {
        word = '- это ноль';
    } else if (number % 2 !== 0) {
        word = '- это нечетное число';
    } else {
        word = '- это четное число';
    }

    console.log(number, word);
    number++;
} while (number <= 10);