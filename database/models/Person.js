const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Person', {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        avatar: DataTypes.STRING
    });
}
