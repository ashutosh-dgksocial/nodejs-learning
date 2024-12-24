
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/LogEvents');
const errorHandler = require('./middleware/errorHandler');


const PORT = process.env.PORT || 3500;
// custom middleware logger
app.use(logger);

// cross origin resource sharing

const whitelist = ['https://www.google.com', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    }, optionSuccessStatus: 200
}

app.use(cors(corsOptions));
// built-in middleware
app.use('/', express.static(path.join(__dirname, "/public")));
app.use('/subdir', express.static(path.join(__dirname, "/public")));

// Routes
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'));



// app.get('/*', (req, res) => {
//     res.status(404).send('404 page')
// })
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.send('404 Dirty Error')

    } else if (req.accepts('json')) {
        res.json({ error: "404 page " })

    } else {
        res.type('txt').send('404 Nahi Found')
    }

})
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) { throw err }
    console.log('port is running on ', `http://localhost:${PORT}`);
})