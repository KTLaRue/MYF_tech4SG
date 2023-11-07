

// import test.js

const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Home!')
// });

// app.get('/hello', (req, res) => {
    
// });

// app.get('*', (req, res) => {
//     res.send(':3')
// });


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(3000)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});