const FuncionarioDao = require("../dao/funcionario-dao")

module.exports = (app, bd) => {

    const DaoFunc = new FuncionarioDao(bd)

    app.get("/funcionarios", async (req, res) => {
        try{
            const resposta = await DaoFunc.verFuncionarios()
            res.send(resposta)
        }catch(error){
            res.send(error)
        }
    })

    app.get("/funcionarios/:ID", async (req, res) => {
        try{
            const id = req.params.ID 

            const resposta = await DaoFunc.verUnicoFuncionario(id)
            res.send(resposta)
        }catch(error){
            res.send(error)
        }
    })

    app.post("/funcionarios/novoFuncionario", async (req, res) => {
        try{
            const body = req.body
            const parametros = [body.NOME, body.EMAIL, body.TELEFONE, body.CARGO, body.CPF]

            const resposta = await DaoFunc.addFuncionario(parametros)
            res.send(resposta)
        }catch(error){
            res.send(error)
        }
    })

    app.delete("/funcionarios/deleteFuncionario/:ID", async (req, res) => {
        try{
            const id = req.params.ID 
            const resposta = await DaoFunc.deleteFuncionario(id)

            res.send(resposta)
        }catch(error){
            res.send(error)
        }
    })

    app.put("/funcionarios/atualizaFuncionario/:ID", async (req, res) => {
        try{
            const id = req.params.ID
            const body = req.body
            const parametros = [body.NOME, body.EMAIL, body.TELEFONE, body.CARGO, body.CPF]

            const resposta = await DaoFunc.atualizarFuncionario(parametros, id)

            res.send(resposta)
            
        }catch(error){
            res.send(error)
        }
    })

}