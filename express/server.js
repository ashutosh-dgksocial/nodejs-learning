
const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3500


app.use((req, res, next) => {
    console.log("req.method, res.url")
    console.log(req.method, req.url)
    next();
})
// middleware
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.send('Default / page');
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, (err) => {
    if (err) { throw err }
    console.log('port is running on ', `http://localhost:${PORT}`)
})