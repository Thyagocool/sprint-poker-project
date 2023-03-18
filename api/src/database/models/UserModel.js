const database = require("../config/connection.js")
const { Sequelize, Model, DataTypes } = require('sequelize')

const userModel = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = userModel