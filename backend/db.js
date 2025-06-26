const { Sequelize } = require('sequelize');

// Replace with your actual database credentials
const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize; 