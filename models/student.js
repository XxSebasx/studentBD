const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const book = sequelize.define('student', {
    DNI: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    campus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        validate: {min: 18}
    },
    estado:{
        type: DataTypes.STRING,
        defaultValue: "pendiente",
        set(value){
            let posibles = ["pendiente", "activo", "inactivo"]
            if(!posibles.includes(value)){
                throw new Error('Do not try to set the `fullName` value!')
            }
            this.estado = value;
        }

    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.nombre} ${this.apellido}`;
        },

        set(){
            throw new Error('Do not try to set the `fullName` value!');
        }
    }
}, {
    tableName: 'CLASS' 
});

module.exports = book;