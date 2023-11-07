const express = require('express')
const app = express()
const port = 3000
const http = require('http');
// app.get('/', (req, res) => {
//   res.send('Home!')
// });

app.get('/test', (req, res) => {
    
});

app.get('*', (req, res) => {
    res.send(':3')
});


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}


function buttonAction1(res){
  res.send('button1 clicked');
}

app.get("/test1", function (req, res) {
  buttonAction1(res);
});

// ('#button1').click(function(){
//   console.log('button clicked');
//   $.ajax({url: 'test1', success:function(res){
//       console.log('server response is', res);
//   }});
// });

app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', function(req, res,next) {
  res.sendFile(__dirname + '/index.html');
});

// app.listen(3000)


 
// Creating server object
const server = http.createServer((req, res) => {
    const url = req.url;
     
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>testing</title><head>');
        res.write('<body><h2>Hello from Node.js server!!</h2></body>');
        res.write('</html>');
        return res.end();
    }
     
    if(url === '/about') {
        res.write('<html>');
        res.write('<head><title>about page</title><head>');
        res.write('<body><h2>this is the about page using Node.js</h2></body>');
        res.write('</html>');
        return res.end();
    }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});