
const express = require('express');
const app = express();
exports.app = app;
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOption')
const { logger } = require('./middleware/LogEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

app.use(cors(corsOptions));
// body parser middleware:
app.use(express.json());

// built-in middleware
app.use('/', express.static(path.join(__dirname, "/public")));

// Routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/employees', require('./routes/api/employees'));


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