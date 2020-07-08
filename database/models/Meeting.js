const { Sequelize, DataTypes } = require('sequelize');
const database = require('..');

module.exports = (sequelize) => {
    return sequelize.define('Meeting', {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        text: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    });
}
