const fsPromise = require("node:fs").promises;
const path = require("path");

const combineFile = async () => {
    try {
        const oldData = await fsPromise.readFile(path.join(__dirname, "files", "text.txt"), "utf8");
        console.log(oldData, "__first_file");
        await fsPromise.unlink(path.join(__dirname, "files", "text.txt"));
        await fsPromise.writeFile(path.join(__dirname, "files", "text_2.txt"), oldData);
        await fsPromise.appendFile(path.join(__dirname, "files", "text_2.txt"), "\n\n_i am appending something new Data {haha---}");
        await fsPromise.rename(path.join(__dirname, "files", "text_2.txt"), (path.join(__dirname, "files", "text_2.txt")));
        const newData = await fsPromise.readFile(path.join(__dirname, 'files', 'text_2.txt'), 'utf8');
        console.log(newData, "__second_file");



    } catch (error) {
        console.error("an error occur");
    }
};
combineFile();

/*
.
.
.
.
.
.
.
.
.
.*/

process.on("uncaughtException", (err) => {
    console.error("There was an uncaught error", err);
    process.exit(1);
});
