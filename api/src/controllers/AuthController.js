import UserRepository from "../repositories/UserRepository.js"
import jsonwebtoken from "jsonwebtoken";
import { PRIVATE_KEY } from "../auth/auth.js";

class AuthController {
    static authUser = async (req, res) => {
        try {
            const {username, password} = req.body
            const user = await UserRepository.getUserByUsernameAndPassword(
                username, password
            )

            if(!user) return res.status(404).send('Usernname or Password incorrect!');

            const token = jsonwebtoken.sign(
                { username },
                PRIVATE_KEY
              );
          
            res.status(200).json(token)
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

export default AuthController