const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/index(.html)?', (req, res) => {
    console.log('Request received for index');
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});


module.exports = router;