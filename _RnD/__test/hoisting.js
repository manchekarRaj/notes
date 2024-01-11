'use strict';

const {square, powerOf} = require('./math.js')

const val = square(5)
console.log(val)

const _p = powerOf(2, 4)
console.log(_p)



// afetch(3)
// afetch(5)

// function afetch(n){
//     //console.log('afetch in ....', n)
//     setTimeout(()=>{
//         var square2 = aasquare(n, n)
//         console.log(square2)
//         console.log(`fetching data from API takes ${n} secs`)
//     },n)
// }

// setTimeout(()=>{
//    // console.log("set time out in 0 sec")
// })
// afetch(1)
// var square1 = aasquare(7, 0)

// aagetName()
// //console.log(aaa)
// //console.log(aagetName)
// //console.log(square1)


// function fetch(callback){
//     return callback
// }

// function doSomethinglater(){
//     return "do something later"
// }
//grandparent
//parentdiv
//childdiv

/*

document.querySelector("#grandparent").addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('grandparent clicked!!', e)
}, true)


document.querySelector("#parentdiv").addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('parent clicked!!', e)
}, false)

document.querySelector("#childdiv").addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('Child clicked!!', e)
}, false)

*/