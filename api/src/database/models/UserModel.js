const database = require("../config/connection.js")
const { Sequelize, Model, DataTypes } = require("sequelize")
const typeUserModel = require("./typeUserModel")

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
    },
    typeUser_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

userModel.belongsTo(typeUserModel, {
    foreignKey: 'typeUser_id'
})

userModel.associate = (models) => {
    userModel.belongsTo(models.typeUserModel,{
        foreignKey: 'typeUser_id',
        as: 'typeUser'
    })
}

module.exports = userModel