// const { format } = require('date-fns')
// const { v4: uuid } = require('uuid')

// const fsPromises = require('fs').promises;
// const path = require('path');

// const logEvents = async (message) => {
//     const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
//     const logItem = `${dateTime}\t${uuid()}\t${message}`;
//     console.log(logItem, 'logItemsss:');
//     try {
//         await fsPromises.mkdir(path.join(__dirname, 'logs'), { recursive: true });
//         await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem + '\n');
//     }
//     catch (err) {
//         console.error(err);
//     }
// };

// module.exports = logEvents;
