module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, 
    {
        timestamps: false,
        tableName: 'users'
    });
}