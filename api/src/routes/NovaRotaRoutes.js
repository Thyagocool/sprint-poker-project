import exress from "express"

const routes = exress.Router()

routes.get("/nova-rota", (req, res) => {
    res.status(200).send("Teste de nova rota")
})


export default routes