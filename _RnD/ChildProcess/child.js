const fs = require('fs')

fs.readFile('../text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) return console.log({ 'error': err })
  return process.send({
    msg: 'Hello from child!!',
    text: data.toString()
  })
})

process.on('message', (msg) => {
  console.log({
    title: 'Message from main process', msg
  })
})

// setTimeout(() => {
//   process.exit('1')
// }, 5000)