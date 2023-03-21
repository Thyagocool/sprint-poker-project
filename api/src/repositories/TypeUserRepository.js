const typeUserModel = require("../database/models/typeUserModel")

class TypeRepository {
    static listTypeUsers = async ()=> {
        const users = await typeUserModel.findAll();
        return users
    }

    static insertTypeUsers = async (user) => {
        const users = await typeUserModel.create(user)
        if(users){
            return users
        }else{
            return {message: "erro"}
        }
        
    }

    static deleteTypeUser = async (id) => {
        typeUserModel.destroy({
            where: {
              id: id
            }
          });
    }
}

module.exports = TypeRepository