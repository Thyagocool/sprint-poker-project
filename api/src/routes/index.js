const express = require("express")
const userRoutes = require("./userRoutes.js")
const typeUserRoutes = require("./typeUserRoutes")




const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerOptions = require("../utils/swagger.js")
const swaggerOutput = require("../utils/swagger-output.json") // assert { type: "json" };
const swaggerDocs = swaggerJsDoc(swaggerOptions)





const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Servidor Rodando")
    })
    app.use(
        userRoutes,
        typeUserRoutes
    )

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput))
    
}

module.exports = routes



    