'use script';

/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
function getSum(a, b) {
    return a + b;
}

/**
 *
 * @param a
 * @param b
 * @returns {number}
 */
function getDeduction(a, b) {
    let minus = a - b;
    return minus;
}

/**
 * 
 * @param a
 * @param b
 * @returns {number}
 */
function getDivide(a, b) {
    let divide = a / b;
    return divide;
}

/**
 * 
 * @type {*}
 */
function getMultiply(a, b) {
    let multiply = a * b;
    return multiply;
}




let Sum = getSum(456, 5);
alert(Sum);

let Minus = getDeduction(65, 45);
console.log(Minus);

let divide = getDivide(99, 3);
alert(divide);

let multiply = getMultiply(56, 88);
console.log(multiply);