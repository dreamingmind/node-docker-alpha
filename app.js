
const Logger = require('./logger');
const logger = new Logger();

logger.addListener('logCalled', () => {console.log('event heard')});
logger.on('logCalled', () => {console.log('again heard')})
logger.log('here we go');

