// fetch Even numbers.
function filterEvenNumbers(arr) {
  return arr.filter((value) => {
    return value % 2 === 0; // module operator divides the value with a number & checks the reminder
  })
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(filterEvenNumbers(data))

// Reverse a given string.
var originalString = "Hello, World!";

function reverseString(str) {
  const arr = str.split('') // Splits a string into an array of substrings
  const revArr = arr.reverse() // reverses the order of the elements in an array.
  const revStr = revArr.join('') // returns an array as a string
  return revStr
}

//console.log(reverseString(originalString))

//fetch prime numbers.
function fetchPrimeNumber(arr) {
  return arr.filter((num) => {
    if (num > 0) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false
        }
      }
      return true
    }
  })
}

const list = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
//const result = fetchPrimeNumber(list)

//factorial of a given number.
function fact(num) {
  if (num === 0) {
    return 1
  }
  return num * fact(num - 1)
}

// function to check if a given number is perfect square.
const value = 9
const num = Math.sqrt(value)
console.log(Number.isInteger(num))

// find the maximum number in an array.
function findMaxNum(arr) {
  let maxNum = arr[0]

  for (i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i]
    }
  }
  return maxNum
}

//sum of all elements in an array
var sum = 0
function findSum(arr) {
  return arr.reduce((acc, value) => {
    return sum = acc + value
  })
}




