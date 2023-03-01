import UserModel from "../database/models/UserModel.js"

class UserRepository {
    static listUsers = async ()=> {
        const users = await UserModel.findAll();
        return users
    }

    static insertUsers = async (user) => {
        console.log('--------------------------3', user)
        const users = await UserModel.create(user)
        console.log('--------------------------4', users)
        if(users){
            return users
        }else{
            return {message: "erro"}
        }
        
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