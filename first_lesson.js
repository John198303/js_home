'use strict';

// первое залание

let tc = prompt('Введите температуру в градусах по Цельсию');
let tf = parseInt((9 / 5) * tc + 32);
alert(`Температура по Форингейту: ${tf}`);

// второе задание

let name = 'Василий';
let admin = name;
console.log(admin);

// третье задание

let item1 = 10 + 10 + '10'; // string      10+10 конкатенация с 10  2010
console.log(item1);

let item2 = '10' + 10; // string       конкатенация 1010
console.log(item2);

let item3 = 10 + 10 + +'10'; // number,  унарный плюс    30
console.log(item3);

let item4 = 10 / -''; // number, унарный минус  деление на ноль   -infinity
console.log(item4);

let item5 = 10 / +'2.5'; // number, унарный плюс        4
console.log(item5);

/* четвертое задание

    Атрибуты async - defer
    Испрользуются для того, чтобы пока грузится внешний скрипт, браузер загружал (показывал) следующую за скриптом
    часть страницы. Разница между атрибутами - async не сохраняет относительную последовательность загрузки скриптов
    (кто быстрее загрузился, тот и выполнился), defer сохраняет относительную последовательность загрузки.
    async выполнится как только загрузится, не ждёт пока весь html документ загрузтся, defer всегда ждёт.

*/

// пятое задание

let ticket = prompt('Введите номер вашего билета');
let sixNumber = parseInt(ticket % 10);
let fiveNumber = parseInt(ticket / 10) % 10;
let forNumber = parseInt(ticket / 100) % 10;
let freeNumber = parseInt(ticket / 1000) % 10;
let secondNumber = parseInt(ticket / 10000) % 10;
let firstNumber = parseInt(ticket / 100000) % 10;

const a = firstNumber + secondNumber + freeNumber;
const b = forNumber + fiveNumber + sixNumber;

if (a === b) {
    alert('Поздравляем, ваш билет - счастливый!!!');
} else {
    alert('Попробуйте в другой раз.');
}

