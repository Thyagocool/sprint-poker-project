import exress from "express"
import UserController from "../controllers/UserController.js"

const routes = exress.Router()

routes
    /**
     * @swagger
     * /users:
     *  get:
     *      description: Get all users
     *      responses: 
     *          200:
     *              description: Success
     *      
     */
    .get("/users", UserController.listUsers)

    /**
     * @swagger
     * /users:
     *  post:
     *    summary: Creates a new use
     *    parameters:
     *      - in: body
     *        name: user
     *        description: true
     *        schema:
     *          type: object
     *          required:
     *            - username
     *          properties:
     *            username:
     *              type: string
     *    responses:
     *      201:
     *        description: User Created
     */
    .post("/users", UserController.insertUsers)
    .delete("/users/:id", UserController.deleteUser)


export default routes