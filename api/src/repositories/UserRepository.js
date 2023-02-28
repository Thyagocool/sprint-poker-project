import TesteModel from "../database/models/UserModel.js"

class UserRepository {
    static listUsers = async ()=> {
        const users = await TesteModel.findAll();
        return users
    }
}

export default UserRepository