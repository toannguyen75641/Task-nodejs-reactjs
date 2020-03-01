const Sequelize = require('sequelize');

var sequelize = new Sequelize('task', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.log(err);
});
  
var db = {};

db.Task = sequelize.import('../model/Task.js');
db.User = sequelize.import('../model/User.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;