
// Rewrite this example using async/await

const URI = "https://jsonplaceholder.typicode.com/todos/1"

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
}

// loadJson(URI).then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log('Error: ', err)
// })


async function loadJsonNew(url) {
  const res = await fetch(url);
  if (res.status === 200) {
    let data = await res.json()
    return data
  }
  throw new Error(res.status)
}

loadJsonNew(URI).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})








// Promise Chaining
const firstPromise = new Promise((resolve, reject) => {
  resolve('First!!')
})

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise)
})

secondPromise.then((res) => {
  return res
}).then((res) => {
  console.log(res)
})