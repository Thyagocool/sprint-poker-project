import exress from "express"
import AuthController from "../controllers/AuthController.js"

const routes = exress.Router()

routes
    /**
     * @swagger
     *  /login:
     *      post:
     *          summary: Authenticate user
     *          description: Checks user credentials and returns token if valid credentials.
     *          tags: [Login]
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/UserBaseSchema'
     *          responses:
     *              200:
     *                  description: OK
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: string
     *              404:
     *                  description: Usernname or Password incorrect!
     */
    .post("/login", AuthController.authUser)

export default routes