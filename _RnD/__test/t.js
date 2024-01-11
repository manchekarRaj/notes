const fs = require('fs')
//const os = require('os')

//console.log(os.cpus().length)
//const result = fs.readFileSync('contacts.txt', 'utf-8')
//console.log(result)

console.log('1')

fs.readFile('contacts.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err)

  console.log('data: ', data)
})

console.log('2')


fs.writeFile('writeablefile.txt', 'Heloow this is text msg!!', (err, data) => {
  if (err) return console.log('err msg:', err)
})

fs.appendFile('writeablefile.txt', 'New msg is here!!', (err, data) => {
  if (err) return console.log('err msg:', err)
})

