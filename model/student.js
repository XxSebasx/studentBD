const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const book = sequelize.define('class', {
    DNI: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ISBN:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    tableName: 'class',
    timestamps: true, 
});

module.exports = book;