import database from "../config/connection.js"
import { Sequelize, Model, DataTypes } from 'sequelize';

const UserModel = database.define('user', {
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
 
export default UserModel 