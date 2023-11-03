const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home!')
});

app.get('/hello', (req, res) => {
    
});

app.get('*', (req, res) => {
    res.send(':3')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});