const fsPromise = require("node:fs").promises;
const path = require("path");

const combineFile = async (params) => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, "files", "text.txt"),"utf8");
        console.log(data);
       await fsPromise.write(path.join(__dirname, "files", "text.txt"),"utf8");
       await fsPromise.append(path.join(__dirname, "files", "text.txt"),"utf8");
       await fsPromise.rename(path.join(__dirname, "files", "text.txt"),"utf8");

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
