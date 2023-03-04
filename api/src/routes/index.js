import express from "express"
import UserRoutes from "./UserRoutes.js"
import NovaRota from "./NovaRotaRoutes.js"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerOptions from "../utils/swagger.js"

import swaggerOutput from "../utils/swagger-output.json" assert { type: "json" };

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Servidor Rodando")
    })
    app.use(
        UserRoutes,
        NovaRota
    )

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput))
    
}

export default routes



    