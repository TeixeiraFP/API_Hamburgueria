const express = require("express")
const app = express()

const port = 3535

const bd = require("../src/data/sqlite3-db")

const funcionarioController = require("./controller/funcionario-controller")

app.use(express.json())

funcionarioController(app, bd)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})