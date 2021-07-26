const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','database.db')
const db = new sqlite3.Database(caminhoArq);



const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(64),
    "CARGO" varchar(64),
    "CPF" varchar(64)
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (ID, NOME, EMAIL, TELEFONE, CARGO, CPF)
VALUES 
    (1, 'Roberta de Sá', 'roberta.sa@bol.com.br', '992590606', 'Atendente', 11122288800),
    (2, 'Filipe Ribeiro', 'filipe.ribeiro@gmail.com', '992550303', 'Chapeiro', 33366655502),
    (3, 'Maria Lima', 'maria_l@yahoo.com', '985000321', 'Atendente', 33352588401)
    `

    function criaTabelaFuncionarios() {
        db.run(FUNCIONARIOS_SCHEMA, (error)=> {
            if(error) console.log("Erro ao criar tabela de Tarefas");
        });
    }
    
    
    function populaTabelaFuncionarios() {
        db.run(ADD_FUNCIONARIOS_DATA, (error)=> {
           if (error) console.log("Erro ao popular tabela de Tarefas");
        });
    }

    db.serialize( ()=> {
        criaTabelaFuncionarios();
        populaTabelaFuncionarios();
        
    });