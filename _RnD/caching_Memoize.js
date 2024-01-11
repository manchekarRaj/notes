//Implement Caching memoize function

function Memoize(fn, context) {
  const store = {}
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!store[argsCache]) {
      store[argsCache] = fn.call(context || this, ...args)
    }
    return store[argsCache]
  }
}

const memoizedResult = Memoize(heavydutySquare)

function heavydutySquare(x, y) {
  for (let i = 0; i <= 100000000; i++) { }
  return x * y
}

console.time('1')
console.log(memoizedResult(4125, 2323))
console.timeEnd('1')

console.time('2')
console.log(memoizedResult(4125, 2323))
console.timeEnd('2')