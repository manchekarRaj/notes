'use strict'

var arr = [['a', 'Jay', 'Nagpur'], ['b', 'Dinesh', 'Mumbai'], ['a', 'Rakesh', 'Thane'], ['a', 'Ravi', 'NZ']]

//Output:
{
    a: [{ 'name': 'Jay', 'location': 'Nagpur' }, { 'name': 'Rakesh', 'location': 'Thane' }]
    b: [{ 'name': 'Dinesh', 'location': 'Mumbai' }]
}

function filterData(arr) {
    return arr.reduce((acc, person) => {
        let p = { 'name': person[1], 'location': person[2] }
        if (person[0] === 'a') {
            return { ...acc, a: [...acc.a, p] }
        }
        return { ...acc, b: [...acc.b, p] }

    }, { a: [], b: [] })
}

const list = filterData(arr)
console.log(list)


return console.log('--End--')

var people = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Joanne', lastName: 'Doe', age: 43 },
    { firstName: 'Lucas', lastName: 'Santos', age: 80 },
    { firstName: 'Rishabh', lastName: 'Manchekar', age: 12 },
];

function groupBy(people) {
    return people.reduce((acc, person) => {
        if (person.age < 18) {
            return { ...acc, children: [...acc.children, person] }
        }
        if (person.age < 35) {
            return { ...acc, young: [...acc.young, person] }

        }
        if (person.age < 55) {
            return { ...acc, midAge: [...acc.midAge, person] }
        }
        return { ...acc, old: [...acc.old, person] }

    }, {
        children: [],
        young: [],
        midAge: [],
        old: []
    })
}

const data = groupBy(people)
console.log(data)





var x = 10;
//---- fetch the highest number -----
const array3 = [3, 7, 63, 45, 9, 11, 4, 89, 12]
//console.log(Math.max(...array3)) //Output: 89
//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

//---- Reduce right function ------
const array2 = [[2, 7], [4, 5], [12, 16], [10, 7]]
const result = array2.reduceRight((val, currentVal) => {
    return val.concat(currentVal)
})
//console.log(result)

//---- Reduce function -----
const array1 = [2, 4, 10, 4]
const sum = array1.reduce((val, currentVal) => {
    return val + currentVal
})
// The returned value is the accumulated result, and is provided as an argument in the next call to the callback function.
console.log(sum)


