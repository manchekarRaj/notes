const fs = require('fs')

fs.readFile('text.txt', (err, data) => {
  if (err) return console.log(err)
  return console.log(data.toString())
})

let sum = 0; // This section calculates the sum of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log('Sum: ', sum);
