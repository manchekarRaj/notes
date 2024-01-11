const fs = require('fs');

try {
  const data = fs.readFileSync('text.txt', { encoding: 'utf8' }); // Reads a file in a synchronous and blocking way  
  console.log(data);
} catch (error) {
  console.log(error)
}


let sum = 0; // This section calculates the sum of numbers from 1 to 10 
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log('Sum: ', sum);