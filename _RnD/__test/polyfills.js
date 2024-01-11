const arr = [1, 2, 3, 4, 5]

Array.prototype.myReduceRight = function (callback, initialVal = null) {
  let accumulator = initialVal;
  for (index = this.length - 1; index >= 0; index--) {
    accumulator = callback(accumulator, this[index], index, this)
  }
  return accumulator
}

const rr = arr.myReduceRight((prevValue, currValue, index, array) => {
  return prevValue + currValue
}, 0)
console.log(rr)

// reduce Polyfill
Array.prototype.myReduce = function (callback, initialVal = null) {
  let accumulator = initialVal;
  for (index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this)
  }
  return accumulator
}

const res = arr.myReduce((prevValue, currValue, index, array) => {
  return prevValue + currValue
}, 0)

//console.log(res)

//Filter polyfill
Array.prototype.myFilter = function (callback) {
  let arr = []
  for (index = 0; index < this.length; index++) {
    if (callback(this[index], index, this) !== undefined) {
      arr.push(callback(this[index], index, this))
    }
  }
  return arr
}

const evenNum = arr.myFilter((val, index, array) => {
  if (val % 2 === 0) {
    return val
  }
})

//console.log(evenNum)

//Map polyfill
Array.prototype.myMap = function (callback) {
  let arr = [];
  for (index = 0; index < this.length; index++) {
    arr.push(callback(this[index], index, this))
  }
  return arr;
}

const result = arr.myMap((value, index, array) => {
  return value - 15
})

//console.log(result)


// forEach PolyFill
Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this)
  }
}

arr.myForEach((value, index, array) => {
  // console.log(value, index, array)
})

