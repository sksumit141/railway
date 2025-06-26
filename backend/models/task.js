const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Task = sequelize.define('Task', {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  submissionDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  lastDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
});

module.exports = Task; 