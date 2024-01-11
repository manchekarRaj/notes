const { Worker } = require('worker_threads');

function nodeWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData })
    worker.on('error', (err) => {
      reject({ "statue": "Something went wrong!", err })
    })
    worker.on('message', (data) => {
      resolve(data)
    })
    worker.on('exit', (code) => {
      reject(new Error(`Worker exited with code ${code}`))
    })
  })
}

async function createWorker() {
  try {
    let data = {
      msg: "\n Hello gain, Please update this text in the text file."
    }
    const workerData = await nodeWorker(data)
    console.log(workerData)
  } catch (error) {
    console.log(error)
  }
}

createWorker()

