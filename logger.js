
let url = 'http://mylogger.io/log';
const Event = require('events');

class Logger extends Event{
    log(message) {
        console.log(message);
        this.emit('logCalled');
    }

}

module.exports = Logger;
