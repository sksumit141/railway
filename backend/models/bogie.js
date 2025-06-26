const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Bogie = sequelize.define('Bogie', {
  bogieNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Bogie; 