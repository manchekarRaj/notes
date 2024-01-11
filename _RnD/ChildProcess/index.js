const { fork } = require('child_process')

const cp = fork('./child.js')
cp.on('error', (err) => {
  console.log(`Error in child process: ${err}`)
})

cp.on('exit', (msg) => {
  console.log(`Child process exited with error: ${msg}`)
})

cp.on('message', (msg) => {
  console.log(msg)
  cp.send({ msg: 'Thank you msg received' })
})

cp.on('close', (code) => {
  console.log(`Child process closed with code ${code}`)
})