const UserRepository = require("../repositories/UserRepository")
const jsonwebtoken = require("jsonwebtoken")
const {PRIVATE_KEY} = require("../middleware/auth")

class AuthController {
    static authUser = async (req, res) => {
        try {
            const {username, password} = req.body
            const user = await UserRepository.getUserByUsernameAndPassword(
                username, password
            )
            if(!user) return res.status(404).send('Username or Password incorrect!');
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

module.exports = AuthController