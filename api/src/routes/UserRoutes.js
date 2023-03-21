
const exress = require ("express")
const  tokenValited  = require("../middleware/auth")
const UserController = require ("../controllers/UserController.js")

const routes = exress.Router()

routes
    .get("/users", tokenValited, UserController.listUsers)
    .get("/users/typeUser", UserController.listUserTypeUser)
    .get("/users/:id", UserController.findOneUserById)
    .get("/users/:id/typeUser", UserController.findOneUserById)
    .post("/users", UserController.insertUsers)
    .put("/users/:id", UserController.updateUser)
    .delete("/users/:id", UserController.deleteUser)


module.exports = routes