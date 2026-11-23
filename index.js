require('dotenv').config()
const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/rahul', (req, res) =>{
  res.send('<h2>Hello Guys</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})