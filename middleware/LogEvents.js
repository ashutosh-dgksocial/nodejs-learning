const fs = require('fs');
const path = require('path');

// Folder and File Paths
const folderPath = path.join(__dirname, '..', 'logs'); 
const filePath = path.join(folderPath, 'cors-log.txt');

// Create the folder if it doesn't exist
fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
        console.error("Error creating folder:", err);
        return;
    }

    // Write initial content to the file (if it doesn't exist)
    const initialMessage = "CORS Log started:\n\n";
    fs.writeFile(filePath, initialMessage, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log(`File created at: ${filePath}`);
        }
    });
});
