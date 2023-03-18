const express = require("express")
const TypeUserRepository = require("../repositories/TypeUserRepository")


class TypeUserController {
    static listTypeUsers = async (req, res) => {
        try {
            const typeUsers = await TypeUserRepository.listTypeUsers()
            res.status(200).json(typeUsers)
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static insertTypeUsers = async (req, res) => {
        try {
            const typeUser = req.body
            await TypeUserRepository.insertTypeUsers(typeUser)

            res.status(201).send({message: "Type User Created"})
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    static deleteTypeUser = async (req, res) => {
        try {
            const {id} = req.params
            await TypeUserRepository.deleteTypeUser(id)
            res.status(202).send({message: "Type User Deleted"})

        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

module.exports = TypeUserController