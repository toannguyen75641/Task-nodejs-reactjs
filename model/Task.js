module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tasks', {
        id: {
            type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
        },
        person_in_charge: {
            type: DataTypes.INTEGER,
        },
    }, 
    {
        timestamps: true,
        createdAt: 'created',
	    updatedAt: 'updated',
        tableName: 'tasks'
    });
}