const UserModel = require("../database/models/UserModel.js")
const typeUserModel = require("../database/models/typeUserModel");
const Repository = require("./Repository.js");

class UserRepository extends Repository{
    constructor(){
        super(UserModel)
    }
    
    async listAllUsers() {
        const users = await UserModel.findAll({ include: typeUserModel });
        return users
    }

    async findOneUserById(id) {
        const data = await UserModel.findByPk(id, { include: typeUserModel })
        return data
    }

    async getUserByUsername(username){
        const data = await UserModel.findAll({ where : { username : username }}, { include: typeUserModel });
        return data
    }

    static getUserByUsernameAndPassword = async (username, password) => {
        const response = await UserModel.findOne({
            where: {
                username
            }
        });
        return response
    }    

}

module.exports = UserRepository