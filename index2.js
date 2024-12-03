const fsPromise = require("node:fs").promises;
const path = require("path");

const combineFile = async (params) => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, "files", "text.txt"), "utf8");
        console.log(data);
        await fsPromise.write(path.join(__dirname, "files", "text.txt"), " _writing_I-AM-WRITING-NEW-TEXT_ ", "utf8");
        await fsPromise.append(path.join(__dirname, "files", "text.txt"), "\n\n_Appending_I-AM-WRITING-NEW-TEXT_ ");
        await fsPromise.rename(path.join(__dirname, "files", "text.txt"), path.join(__dirname, "files", "newTxt.txt"));
        const readNewData = await fsPromise.readFile(path.join(__dirname, "files", "newTxt.txt"), 'newText');

        console.log(readNewData);

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
