import exress from "express"
import AuthController from "../controllers/AuthController.js"

const routes = exress.Router()

routes
    .post("/login", AuthController.authUser)

export default routes