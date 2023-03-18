const database = require("../config/connection.js")
const { Sequelize, Model, DataTypes } = require('sequelize')

const typeUser = database.define('typeuser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = typeUser