import express from "express"
import routes from "./routes/index.js"
import database from "./database/config/connection.js"

const app = express()
app.use(express.json())

try {
    const resultado = await database.sync();

} catch (error) {
    console.error(error)
}

routes(app)

app.listen(3000, () => {
    console.log("Server is running")
})