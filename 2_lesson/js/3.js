'use strict';

let a = parseInt(-5);
let b = parseInt(3);

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a < 0 && b >=0 || a >= 0 && b <0){
    alert(a + b);
}




