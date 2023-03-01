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
        console.log('--------------------------')
        try {
            const user = req.body
            console.log('--------------------------2')
            const users = await UserRepository.insertUsers(user)

            res.status(201).send({message: "User Created"})
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const {id} = req.params
            await UserRepository.deleteUser(id)
            res.status(202).send({message: "User Deleted"})

        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

export default UserController