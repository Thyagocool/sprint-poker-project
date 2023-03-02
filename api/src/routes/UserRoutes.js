import exress from "express"
import UserController from "../controllers/UserController.js"
import { tokenValited } from "../auth/auth.js";

const routes = exress.Router()

routes
    .get("/users", tokenValited, UserController.listUsers)
    .post("/users", UserController.insertUsers)
    .delete("/users/:id", tokenValited, UserController.deleteUser)


export default routes