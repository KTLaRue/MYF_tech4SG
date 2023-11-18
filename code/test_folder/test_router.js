const express = require('express')
const app = express()
const port = 3000
const http = require('http');

const clicked = require('./test.js');
// import clicked from './test.js';

const myLogger = function (req, res, next) {
  console.log('Logged via logger')
  next()
}

function testPrint(res) {
  res.send('testing print on action xyz');
  // next()
}

function buttonAction1(res){
  res.send('button action from test_router working');
  // next()
}

app.get("/dest1", function (req, res) {
  clicked(res);
  // buttonAction1(res)
  // testPrint(res)

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
