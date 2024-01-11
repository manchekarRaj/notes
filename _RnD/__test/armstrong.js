'use strict'
const Value = 153;
let sum = 0;
let temp = Value;

while (temp > 0) {
  let numberOrder = temp % 10;
  let cubeofNumber = numberOrder ** 3
  sum += cubeofNumber
  temp = parseInt(temp / 10)
}

(sum === Value) ? console.log('True') : console.log('False')