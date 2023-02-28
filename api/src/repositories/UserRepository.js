import UserModel from "../database/models/UserModel.js"

class UserRepository {
    static listUsers = async ()=> {
        const users = await UserModel.findAll();
        return users
    }

    static insertUsers = async (user) => {
        const users = await UserModel.create(user)
        
        if(users){
            return users
        }else{
            return {message: "erro"}
        }
        
    }
}

export default UserRepository