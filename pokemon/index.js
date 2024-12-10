const http = require('http');
const fs = require('fs');
console.log('this is correct path', __dirname);

// Get the contents of the HTML, CSS, JS and Logo files
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/style.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.png');
const homeLogic = fs.readFileSync('./navbar-app/index.js');
// Creating the Server
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);


    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/script.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homeStyles); // Use a string here
        res.end();
    } else if (url === '/logo.png') {
        res.writeHead(200, { 'Content-Type': 'text/png' });
        res.write(homeLogo); // Use a string here
        res.end();
    } else if (url === '/script.js') {
        res.writeHead(404, { 'Content-Type': 'text/javascript' });
        res.write(homeLogic); // Use a string here
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404, Resource Not Found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server listening at port 5000');
});