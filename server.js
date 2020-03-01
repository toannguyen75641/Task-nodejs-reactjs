const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const tasks = require('./routes/tasks');
const users = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', tasks);
app.use('/api', users);

app.listen(port, function() {
    console.log('listening on *:' + port);
});