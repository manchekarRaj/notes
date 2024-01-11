const arr = [56, 15, 108, 56, 45, 15, 56, 98, 115, 23, 75, 45, 75]
const arr1 = [{ fn: 'J', ln: 'K', age: 13 }, { fn: 'T', ln: 'C', age: 56 }, { fn: 'D', ln: 'L', age: 75 },
{ fn: 'S', ln: 'V', age: 63 }, { fn: 'R', ln: 'C', age: 87 }, { fn: 'B', ln: 'N', age: 21 },
{ fn: 'N', ln: 'K', age: 45 }, { fn: 'W', ln: 'G', age: 17 }, { fn: 'D', ln: 'M', age: 5 }]


let x = {
  name: 'Rishabh', age: 12, address: { add1: 'Kandivali - Charkop', pin: 400067 }
}

Object.freeze(x)

x.name = 'Rhea'


let y = {
  address: {
    add1: 'New Zealand', pin: 540001
  },
  phone: 120004578
}

//Object.assign(x, y)
console.log('x', x)

const person = Object.create(x)
person.address.pin = 510001

console.log('person', person)

console.log('x::', x)


const arr2 = [0, 1, 2, [3, [4, 5], 6], 7]

let arr3 = arr2.flat()
console.log(arr3)

console.log(arr3.flat())

console.log('arr2::', arr2)

var deep = _.cloneDeep(x)
deep.name = 'Rhea M'
console.log('x - deep', x)
console.log('deep', deep)






/// Shallow copy //////
// let a = arr;
// let b;

// b = a
// //console.log('b1:', b)
// a[0] = 100;
// //console.log('b2:', b)
// //console.log('a:', a)
// setTimeout(() => {
//   a[1] = 200
//   // console.log('b3', b)
//   b[2] = 500;
//   // console.log('a >>', a)
// }, 2000)

// let y;
// y = x

// console.log('y:', y)

// y.age = 13
// y.address.pin = '416611'

// console.log('x>>', x)

// end of Shallow Copy//////





/*
const filterEvenAge = (arr) => {
  var temparr = [];
  arr.filter((num) => {
    if (num.age % 2 !== 0) {
      temparr.push(num)
    }
    // if (num % 2 == 0) {
    //   temparr.push(num)
    // }
  })

  return temparr

}

const res = filterEvenAge(arr1)
console.log(res)




const fetchDetails = (arr) => {
  return arr.reduce((acc, person) => {
    if (person.age < 18) {
      return { ...acc, kids: [...acc.kids, person] }
    }
    if (person.age < 35) {
      return { ...acc, young: [...acc.young, person] }
    }
    if (person.age < 60) {
      return { ...acc, mid_age: [...acc.mid_age, person] }
    }

    return { ...acc, old_age: [...acc.old_age, person] }
  }, {
    kids: [],
    young: [],
    mid_age: [],
    old_age: []
  })
}

const result = fetchDetails(arr1)

// const fetchDuplicateEle = (arr) => {
//   var store = {
//     count: {},
//     newArr: {}
//   }

//   for (let x of arr) {
//     store.count[x] = (store.count[x] || 0) + 1
//   }

//   for (let key in store.count) {
//     if (store.count[key] > 1) {
//       store.newArr[key] = store.count[key]
//     }
//   }
//   console.log(store)
// }

// //fetchDuplicateEle(arr);



function find_max(nums) {
  let max_num = 0; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      max_num = num
    }
  }
  console.log(`max_num is array: ${nums} is  ${max_num}`)
  return max_num;
}

//let val = find_max(arr)


//console.log(undefined + true) //NaN
//console.log(NaN + NaN) // NaN
//console.log(NaN + 1) // NaN
//console.log(1 + true) // 2
//console.log(undefined == null) // true
//console.log(undefined === null) // false
//console.log(null + 1)// 1
//console.log(null + null)//0
//console.log(undefined + null)// NaN


var student = {
  name: null,
  age: null
}

var jack = Object.create(student)
jack.name = "Jack"
jack.age = 20

console.log(jack)

Object.assign(temp, student)

*/



