// let a = 1, b = 0; c = 4;
// value = b || c || a;

// console.log(value);

// let x = 7, y = 0, z = 9;
// value2 = x && y && z;
// console.log(value2)

//console.log(7 - 3 - "30")

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args)
    }
    return res[argsCache]
  }
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) { };
  return num1 * num2;
}

console.time("1")
console.log(clumsySquare(7867, 9846))
console.timeEnd("1")

console.time("2")
console.log(clumsySquare(7867, 9846))
console.timeEnd("2")

console.time("3")
console.log(clumsySquare(7867, 9846))
console.timeEnd("3")

const memoizedProduct = myMemoize(clumsySquare)

console.time("1")
console.log(memoizedProduct(7867, 9846))
console.timeEnd("1")

console.time("2")
console.log(memoizedProduct(7867, 9846))
console.timeEnd("2")

console.time("3")
console.log(memoizedProduct(7867, 9846))
console.timeEnd("3")


