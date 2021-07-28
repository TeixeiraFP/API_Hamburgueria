module.exports = class Funcionarios {
    
    constructor(bd){
        this.bd = bd
    }

    verFuncionarios(){
        return new Promise ((resolve, reject) => {
            const query = "SELECT * FROM FUNCIONARIOS"
            console.log("dentro da promisse")
            this.bd.all(query, (error, response) => {
                
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve (response)  
                    
            })
        })
    }
    verUnicoFuncionario(id){
        return new Promise ((resolve, reject) => {
            const query = "SELECT * FROM FUNCIONARIOS WHERE ID = (?)"

            this.bd.get(query, id, (error, response) => {
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve(response)  
            })
        })
    }
    addFuncionario(funcionario){
        return new Promise ((resolve, reject) => {

            const query = `INSERT INTO FUNCIONARIOS (NOME, EMAIL, TELEFONE, CARGO, CPF)
             VALUES (?,?,?,?,?)`
            // const novoFunc = [infos[0],infos[1],infos[2],infos[3],infos[4]]
            let obj = Object.values(funcionario)
            this.bd.run(query, obj, error => {
                if(error) reject(`Erro ao adicionar novo Funcionário. ${error}`)
                else resolve(`Novo funcionário adicionando com sucesso ao BD.`)
            })

        })
    }
    deleteFuncionario(id){
        return new Promise ((resolve, reject) => {
            const query = `DELETE FROM FUNCIONARIOS WHERE ID = (?)`

            this.bd.run(query, id, error => {
                if(error) reject(`Erro ao deletar o usuário de ID:${id}, error:${error}`)
                else resolve(`Usuário com ID:${id} deletado com sucesso`)
            })
        })
    }
    atualizarFuncionario(infos, id){
        return new Promise ((resolve, reject) => {
            const query = `UPDATE FUNCIONARIOS SET NOME = (?), EMAIL = (?), TELEFONE = (?), CARGO = (?), CPF = (?) WHERE ID = (?)`
            const atualizaFunc = [infos[0],infos[1],infos[2],infos[3],infos[4], id]

            this.bd.run(query, atualizaFunc, error => {
                if(error) reject(`Erro ao fazer a atualização dos dados do Funcionario. ${error}.`)
                else resolve(`Atualização realizada com sucesso.`)
            })
        })
    }
}