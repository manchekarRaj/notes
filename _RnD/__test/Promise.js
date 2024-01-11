const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];



// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );

Promise.allSettled(promises).then((result)=>{
    console.log(result)
    result.forEach((x)=>{
        console.log(x.status)
    })
}).catch((err)=>{
    console.log(err)
})