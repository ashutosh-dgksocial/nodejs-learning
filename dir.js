// const fs = require('fs');

// if (!fs.existsSync('./new')) {
//     fs.mkdir('./new', (err) => {
//         if (err) throw err;
//         console.log('new folder created successfully ');
//     })
// }
// if (fs.existsSync('./new')) {
//     fs.rmdir("./new", (err) => {
//         if (err) throw err;
//         console.log("deleted successfully");
//     })
// }

/* with promise both at a same time my way */
// const fs = require('fs').promises;

// const main = async () => {
//     try {

//         await fs.mkdir('./new')
//         console.log('created successfully ')
//         await setTimeout(() => {
//             fs.rmdir('./new')
//             console.log('Deleted successfully ')
//         }, 2000)


//     } catch (error) {
//         console.error('if any error', error)
//     }
// }

// main();

const fs = require('fs').promises;

const main = async () => {
    try {
        // Check if the 'new' folder exists
        try {
            await fs.access('./new'); // Throws an error if 'new' does not exist
            console.log("'new' folder exists. Deleting...");

            // If it exists, delete the folder
            await fs.rmdir('./new');
            console.log("Folder deleted successfully.");
        } catch (err) {
            console.log("'new' folder does not exist. Creating...");

            // If 'new' does not exist, create the folder
            await fs.mkdir('./new');
            console.log("Folder created successfully.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

main();
