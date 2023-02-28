import express from "express"
import UserRepository from "../repositories/UserRepository.js"


class UserController {
    static listUsers = async (req, res) => {
        try {
            const users = await UserRepository.listUsers()
            res.status(200).json(users)
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static insertUsers = async (req, res) => {
        try {
            const user = req.body
            const users = await UserRepository.insertUsers(user)

            res.status(201).send({message: "User Created"})
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
        
    }
}

export default UserController