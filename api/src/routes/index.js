import UserRoutes from "./UserRoutes.js"
import AuthRoutes from "./AuthRoutes.js"
import swaggerUi from "swagger-ui-express"
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const swaggerDocs = require("../utils/swagger.json")

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



    