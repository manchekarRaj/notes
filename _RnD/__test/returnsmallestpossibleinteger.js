const arr = [5, 3, -1, 12, 7, 9]

function findSmallestNum(arr) {
  if (arr.length === 0) return

  arr = arr.filter((val) => {
    if (val > 0) {
      return val
    }
  })

  arr.sort()
  //console.log(arr)

  let smallestNumber = 1;
  let nextSmallestNumber = null;

  for (let x of arr) {
    if (x === smallestNumber) {
      return x
    } else if (x > smallestNumber && !(nextSmallestNumber)) {
      nextSmallestNumber = x
    } else if (x < nextSmallestNumber) {
      nextSmallestNumber = x
    }
  }

  return nextSmallestNumber;
}

console.log(findSmallestNum(arr))
