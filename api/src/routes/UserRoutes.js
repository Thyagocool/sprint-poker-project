import exress from "express"
import UserController from "../controllers/UserController.js"
import { tokenValited } from "../auth/auth.js";

const routes = exress.Router()

/**
 * @swagger
 *  components:
 *      schemas:
 *          UserSchema:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The user ID.
 *                      example: 0
 *                  username:
 *                      type: string
 *                      description: The user's username.
 *                      example: username
 *                  password:
 *                      type: string
 *                      description: The user's password.
 *                      example: password
 *          UserBaseSchema:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                      description: The user's username.
 *                      example: username
 *                  password:
 *                      type: string
 *                      description: The user's password.
 *                      example: password
 */

routes    
    /**
     * @swagger
     *  /users:
     *      get:
     *          description: Get all users
     *          tags: [User]
     *          security: [ bearerAuth: [] ]
     *          responses: 
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: '#/components/schemas/UserSchema'
     *      
     */
    .get("/users", tokenValited, UserController.listUsers)

    /**
     * @swagger
     *  /users:
     *      post:
     *          summary: Creates a new use
     *          tags: [User]
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/UserBaseSchema'
     *          responses:
     *              201:
     *                  description: User Created
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: '#/components/schemas/UserBaseSchema'
     *              409:
     *                  description: Username Already exists!
     */
    .post("/users", UserController.insertUsers)
    .delete("/users/:id", tokenValited, UserController.deleteUser)


export default routes