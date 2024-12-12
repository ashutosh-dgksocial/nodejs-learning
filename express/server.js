const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/plain' })
//     res.write('hello world')
//     res.end();
// })

app.get('^/$|index(.html)?', (req, res) => {
    // res.send('hello express world');
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get('/index2(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "index2.html"));
})
app.get('/old2(.html)?', (req, res) => {
    res.redirect(301, "/index2.html"); // 302 by default
})

app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempt to to load hello.html');
    next();
}, (req, res) => {
    res.send('Hello World');
});

const one = (req, res, next) => {
    console.log("attempt one ");
    next();
}
const two = (req, res, next) => {
    console.log("attempt two");
    next();
}
const three = (req, res, next) => {
    console.log("attempt three")
    res.send('attempt end here');
}
app.get('/chain(.html)?', [one, two, three]);
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})
app.listen(PORT, () => { console.log(`server running on port: localhost:5000`) })