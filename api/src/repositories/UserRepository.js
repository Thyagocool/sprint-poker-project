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

}

module.exports = UserRepository