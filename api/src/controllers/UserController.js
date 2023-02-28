import express from "express"
import UserRepository from "../repositories/UserRepository.js"


class UserController {
    static listUsers = async (req, res) => {
        const users = await UserRepository.listUsers()
        res.status(200).json(users)
    }
}

export default UserController