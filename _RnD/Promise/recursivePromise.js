function fetchLikes() {
  return new Promise((resolve, reject) => {
    resolve(85)
  })
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    resolve(15)
  })
}

function fetchMsg() {
  return new Promise((resolve, reject) => {
    resolve({ msg: "Simple msg!!!" })
  })
}

function promRecursive(promiseArr) {
  if (promiseArr.length === 0) return

  const currPromise = promiseArr.shift()

  currPromise.then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })

  promRecursive(promiseArr)

}

promRecursive([fetchLikes(), fetchMsg(), fetchPosts()])
