const UserModel = require("../database/models/UserModel.js")
const UserRepository = require("../repositories/UserRepository.js")

const userRepository = new UserRepository(UserModel)

class UserController {

    static listUsers = async (req, res) => {
 
        
        // #swagger.path = '/user'
        // #swagger.method = 'get'
        // #swagger.description = 'Get All Users'
        // #swagger.produces = ["application/json"]
        // #swagger.tags = ['Users']
        
        try {
            const users = await userRepository.selectAll()

            res.status(200).json(users) // #swagger.responses[200]
            
        } catch (error) {
            res.status(404).send({message: error.message}) // #swagger.responses[404]
        }
    }    

    static listUserTypeUser = async (req, res) => {
        /*
        #swagger.path = '/user'
        #swagger.method = 'get'
        #swagger.description = 'Get All Users with Type User'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Users']
        */        
        try {
            const users = await userRepository.listAllUsers()
            
            res.status(200).json(users)
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }


    static findOneUserById = async (req, res) => {
        try {
            const { id } = req.params
            const user = await userRepository.findOneUserById(id)
            res.status(200).json(user)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    static findUserByUsername = async (req, res) => {
        try {
            const { username } = req.params
            const user = await userRepository.getUserByUsername(username)
            res.status(200).json(user)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    static insertUsers = async (req, res) => {
        try {
            const user = req.body
            const users = await userRepository.insertDataModel(id, user)

            res.status(201).send({message: "User Created"})
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static updateUser = async (req, res) => {
        try {
            const user = req.body
            const { id } = req.params 
            const resultSet = await userRepository.updateModel(id, user)

            res.status(201).send({message: "User Updated"})

        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const {id} = req.params
            await userRepository.deleteModel(id)
            res.status(202).send({message: "User Deleted"})

        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

module.exports = UserController