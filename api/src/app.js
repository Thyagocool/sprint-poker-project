const express = require( "express")
const routes = require( "./routes/index.js")
const cors = require("cors")

const app = express()
app.use(express.json())

routes(app)

app.use(cors)

app.listen(3000, () => {
    console.log("Server is running")
})