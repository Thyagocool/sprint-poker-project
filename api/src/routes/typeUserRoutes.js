const exress = require ("express")
const TypeUserController = require ("../controllers/TypeUserController.js")

const routes = exress.Router()

routes
    .get("/typeusers", TypeUserController.listTypeUsers)
    .post("/typeusers", TypeUserController.insertTypeUsers)
    .delete("/typeusers/:id", TypeUserController.deleteTypeUser)
    .put("/typeusers/:id", TypeUserController.deleteTypeUser)


module.exports = routes