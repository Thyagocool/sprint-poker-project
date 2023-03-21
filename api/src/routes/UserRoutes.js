
const exress = require ("express")
const UserController = require ("../controllers/UserController.js")

const routes = exress.Router()

routes
    .get("/users", UserController.listUsers)
    .get("/users/typeUser", UserController.listUserTypeUser)
    .get("/users/:id", UserController.findOneUserById)
    .get("/users/:id/typeUser", UserController.findOneUserById)
    .post("/users", UserController.insertUsers)
    .put("/users/:id", UserController.updateUser)
    .delete("/users/:id", UserController.deleteUser)


module.exports = routes