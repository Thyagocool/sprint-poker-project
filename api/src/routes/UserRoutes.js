import exress from "express"
import UserController from "../controllers/UserController.js"

const routes = exress.Router()

routes.get("/users", UserController.listUsers)


export default routes