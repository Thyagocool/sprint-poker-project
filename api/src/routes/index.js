import express from "express"
import UserRoutes from "./UserRoutes.js"
import NovaRota from "./NovaRotaRoutes.js"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerOptions from "../utils/swagger.js"


const swaggerDocs = swaggerJsDoc(swaggerOptions)

console.log(swaggerDocs)



const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Servidor Rodando")
    })
    app.use(
        UserRoutes,
        NovaRota
    )

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

export default routes



    