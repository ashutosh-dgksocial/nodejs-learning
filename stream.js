const fs = require('fs');

const rs = fs.createReadStream('./files/test_stream.txt', { encoding: 'utf8' });
const ws = fs.createWriteStream('./files/test_stream_copy.txt');

rs.on('data', (datachunk) => {
    if (!ws.write(datachunk)) {
        // Pause reading if write buffer is full
        rs.pause();
    }
});

ws.on('drain', () => {
    // Resume reading when writable stream is ready
    rs.resume();
});

rs.on('end', () => {
    ws.end(); // Close writable stream when done
});

rs.on('error', (err) => {
    console.error('Error reading file:', err);
});

ws.on('error', (err) => {
    console.error('Error writing file:', err);
});