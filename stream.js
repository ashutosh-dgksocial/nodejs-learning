// ------stream-------
const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream('./files/oldStream.txt', { encoding: 'utf8' })

const ws = fs.createWriteStream('./files/newStream.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })
// // Listen for end event on the readable stream
// rs.on('end', () => {
//     ws.end(); // Close the writable stream
// });
// // Handle finish event for writable stream
// ws.on('finish', () => {
//     console.log('File has been written successfully.');
// });

rs.pipe(ws)