module.exports = class Funcionarios {
    
    constructor(bd){
        this.bd = bd
    }

    // verFuncionarios(){
    //     return new Promise ((resolve, reject) => {
    //         const query = "SELECT * FROM FUNCIONARIOS"

    //         this.bd.all(query, (error, response) => {
    //             if(error) reject(`Erro ao acessar o BD. ${error}`)
    //             else resolve(response)
    //         })
    //     })
    // }
}