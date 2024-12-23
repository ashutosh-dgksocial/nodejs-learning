const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem, 'logItemsss:');
    try {
        await fsPromises.mkdir(path.join(__dirname, 'logs'), { recursive: true });
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem + '\n');
    }
    catch (err) {
        console.error(err);
    }
};

// log event function
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`); // Call logEvents with the message
    console.log(`message::: ${req.method} ${req.path}`);
    next();
};


module.exports = { logger, logEvents };
