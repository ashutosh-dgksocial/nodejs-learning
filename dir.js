const fs = require('fs');

fs.mkdir('new', (err) => {
    if (err) {
        console.error('bro error while creating folder', err)
        return
    }
    console.log('created successfully...');
}) 