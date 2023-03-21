const database = require("../config/connection.js")
const { Sequelize, Model, DataTypes } = require('sequelize')

const typeUserModel = database.define('typeuser', {
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

typeUserModel.associate = (models) => {
    typeUserModel.hasMany(models.userModel,{
        foreignKey: 'typeUser_id',
        as: 'typeUser'
    })
}
 
module.exports = typeUserModel