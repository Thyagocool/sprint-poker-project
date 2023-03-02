import UserRoutes from "./UserRoutes.js"
import AuthRoutes from "./AuthRoutes.js"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerOptions from "../utils/swagger.js"
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const swaggerDocs = require("../utils/swagger.json")
const swaggerDocs = swaggerJsDoc(swaggerOptions)

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Server Running")
    })

    app.use(
        AuthRoutes,
        UserRoutes
    )

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

export default routes



    