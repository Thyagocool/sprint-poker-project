import exress from "express"
import UserController from "../controllers/UserController.js"

const routes = exress.Router()

routes
    .get("/users", UserController.listUsers)
    .post("/users", UserController.insertUsers)
    .delete("/users/:id", UserController.deleteUser)
    .put("/users/:id", UserController.deleteUser)


export default routes