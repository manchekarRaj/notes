const { parentPort, workerData } = require('worker_threads');
const fs = require('fs')

//console.log(workerData.msg)

fs.appendFile('./output.txt', workerData.msg, (err, data) => {
  if (err) return parentPort.postMessage({ status: err })
  return parentPort.postMessage({ staus: 'File saved' })
})

//parentPort.postMessage({ staus: workerData })