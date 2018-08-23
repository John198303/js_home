'use strict';


/**
 * Склонение существительного, в зависимости от величины значения
 */




function getEnding(a, b) {
    if (a > 4 || a === 0 || b >= 11 && b < 15) {
        let end = 'рублей';
        return end;
    } else if (a > 1 && a < 5) {
        let end = 'рубля';
        return end;
    } else if (a === 1) {
        let end = 'рубль';
        return end;
    }
}

let quantity = parseInt(prompt('Какую сумму Вы хотите положить на счёт?'));

if (quantity === ""){
    alert('aaa');
}
let lastNumber = parseInt(quantity) % 10;
let preLastNumber = parseInt((quantity / 10) % 10) * 10 + lastNumber;
let ending = getEnding(lastNumber, preLastNumber);


alert(`Ваша сумма в ${quantity} ${ending} успешно зачислена`);

