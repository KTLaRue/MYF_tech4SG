const express = require('express')
const app = express()
const port = 3000
const http = require('http');


const myLogger = function (req, res, next) {
  console.log('Logged via logger')
  next()
}


function buttonAction1(res){
  res.send('button1 clicked');
}

app.get("/dest1", function (req, res) {
  buttonAction1(res);
});

app.use(myLogger)


app.get('/', function(req, res,next) {
  res.sendFile(__dirname + '/index.html');
});


app.get('*', (req, res) => {
  res.send(':3')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
