const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// var temp = []
// arr.forEach((val) => {
//   temp.push(val % 2)
// })


const output = arr.map((val, i) => {
  return (val * 3) + i
})

//Polyfill of map
Array.prototype.myMap = function (callback) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this))
  }
  return arr
}

//Polyfill of filter
Array.prototype.myFilter = function (callback) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i])
    }
  }
  return temp
}

const filteredData = arr.myFilter((num) => {
  return num > 7
})

//console.log('filteredData', filteredData)

//Polyfill of Reduce
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator
}

const mySum = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr
})

//console.log('mySum', mySum)

const newoutput = arr.myMap((num, i, arr) => {
  return num * 3
})

///console.log(newoutput)




//console.log(output)

// const sum = arr.reduce((acc, curr, i, arr) => {
//   console.log(acc + " -- " + curr)
//   return acc + curr
// }, 0)

// console.log(sum)


let students = [{ name: "Piyush", rollno: 31, marks: 80 },
{ name: "Jinny", rollno: 15, marks: 41 },
{ name: "Kushal", rollno: 23, marks: 55 },
{ name: "Deepak", rollno: 8, marks: 36 },
{ name: "Geeta", rollno: 11, marks: 62 }]


// Return only names of students who scored more than 60
const result = students.filter((person) => person.marks > 60).map((stu) => stu.name)

//console.log(result)

const totalmarks = students.map((stu) => {
  if (stu.marks < 60) {
    stu.marks += 20
  }
  return stu
}).filter((stu) => {
  if (stu.marks > 60) {
    return stu
  }
}).reduce((acc, curr) => {
  return acc + curr.marks
}, 0)

console.log(totalmarks)
