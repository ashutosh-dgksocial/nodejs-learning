const express = require('express');
const app = express();
const cors = require('cors');
const port = 3030
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'WE ARE LEARNING CORS AGGRESSIVELY ' }) 
})

app.listen(port, () => {
    console.log('port running on ', port);
})  