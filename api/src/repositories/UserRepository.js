const userModel = require("../database/models/userModel")

class UserRepository {
    static listUsers = async ()=> {
        const users = await userModel.findAll();
        return users
    }

    static insertUsers = async (user) => {
        const users = await userModel.create(user)
        if(users){
            return users
        }else{
            return {message: "erro"}
        }
        
    }

    static deleteUser = async (id) => {
        userModel.destroy({
            where: {
              id: id
            }
          });
    }
}

module.exports = UserRepository