import UserModel from "../database/models/UserModel.js"

class UserRepository {
    static listUsers = async () => {
        const users = await UserModel.findAll();
        return users
    }

    static getUserByUsername = async (username) => {
        const response = await UserModel.findOne({
            where: {username}
        });
        return response
    }

    static getUserByUsernameAndPassword = async (username, password) => {
        const response = await UserModel.findOne({
            where: {
                username, password
            }
        });
        return response
    }

    static insertUsers = async (user) => {
        const users = await UserModel.create(user)
        
        if(users) return users
        return {message: "erro"}
    }

    static deleteUser = async (id) => {
        UserModel.destroy({
            where: {
              id: id
            }
          });
    }
}

export default UserRepository