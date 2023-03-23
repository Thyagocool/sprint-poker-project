const express = require("express")
const userRoutes = require("./userRoutes")
const typeUserRoutes = require("./typeUserRoutes")
const authRoutes = require("./authRoutes")

const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerOptions = require("../utils/swagger.js")
const swaggerOutput = require("../utils/swagger-output.json")
// const swaggerDocs = swaggerJsDoc(swaggerOptions)



const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Servidor Rodando")
    })

    app.use(
        userRoutes,
        typeUserRoutes,
        authRoutes
    )

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput))
    
}

module.exports = routes



    