const express = require("express");
const path = require('path')
const app = express()
var http = require('http'),
  fs = require('fs');
const PORT = 4001;

//static middleware - //http://localhost:4001/nodejs/index.html
app.use('', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello from notes!!')
})

app.listen(PORT, () => {
  console.log(`Notes running on port: ${PORT}`)
})

