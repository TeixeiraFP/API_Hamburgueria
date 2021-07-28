const FuncionarioDao = require("../dao/funcionario-dao")
const Funcionario = require("../model/funcionario-model")

module.exports = (app, bd) => {

    let DaoFunc = new FuncionarioDao(bd)

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
            // const body = req.body
            // const parametros = [body.NOME, body.EMAIL, body.TELEFONE, body.CARGO, body.CPF]

            const {NOME, EMAIL, TELEFONE, CARGO, CPF} = req.body

            let funcionario = new Funcionario (NOME, EMAIL, TELEFONE, CARGO, CPF)
           
            let resposta = await DaoFunc.addFuncionario(funcionario)
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