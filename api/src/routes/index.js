import express from "express"
import UserRoutes from "./UserRoutes.js"
import NovaRota from "./NovaRotaRoutes.js"

const routes = (app) => {
    app.route("/", (req, res) => {
        res.send("Servidor Rodando")
    })
    
    app.use(
        UserRoutes,
        NovaRota
    )
}

export default routes



    