const debug = require('debug')('app:startup');
const express = require('express');
const morgan = require('morgan');
const app = express();
const courses = require('./routes/courses');
const root = require('./routes/root');

app.set('view engine', 'pug');

app.use(express.json());

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('Morgan running...');
}
app.use('/api/courses', courses);
app.use('/', root);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});