const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CLASS', 'root', 'MiContraseña2025!', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
