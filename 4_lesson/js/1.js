'use strict';

let inputNumber = (prompt('Введите число от 0 до 999'));


function getNumberOfUser(number) {
    if (number > 999 || number < 0 || isNaN(number)) {
        alert('Введите число из предложенного диапазона');
        return false;
    }

    number.split('');
    return number;
}

let arr = getNumberOfUser(inputNumber);


let obj = {
    secondNumber: arr[1],
    firstNumber: arr[0],
    thirdNumber: arr[2],
};

console.log(obj.firstNumber);
