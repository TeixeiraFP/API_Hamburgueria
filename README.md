
## Projeto API Rest criada em NODEJS. 

### Tecnologias Utilizadas
1. Git
2. Node.js
   
#### Após fazer o download e a instalação dos programas, siga os passos abaixo:

1. Faça o clone do projeto, Abra o terminal do git e execute o comando: <br>
` https://github.com/TeixeiraFP/API_Hamburgueria.git `

2. Execute em um terminal dentro da pasta onde foi hospedado o clone do projeto o comando:<br>
` npm install`     
***O comando npm instal irá instalar todas dependências necessárias para o funcionamento do projeto***
***no arquivo package.json você tem acesso a qual são essas dependência.***

3. Execute uma vez, **apenas umas vez** o comando: <b>
` node ./src/data/create-and-populate ` <br>
***Esse comando irá criar e popular seu BD.***

4. Por fim  Com todas dependências instaladas e o BD criado, execute o comando: <br>
` npm run dev `

5. As rota para acessar a entidade Funcionario são:
  GET: `"/funcionarios"` <br>
  GET: `"/funcionarios/:ID"` <br><br>
  POST: `"/funcionarios/novoFuncionario"`  <br><br>
  DELETE: ` "/funcionarios/deleteFuncionario/:ID"` <br><br>
  PUT: `"/funcionarios/atualizaFuncionario/:ID"` <br>

***As rotas  **GET**, **POST** e **PUT** recebem como parâmetro o **ID** do funcionário, e as rotas **POST** e **PUT** devem receber um objeto no corpo da requisição***


Agora você pode utilizar o projeto e testas as rotas, **GET**, **PUT**, **POST** e **DELETE**, para realizar os teste você pode usar o **Postman**, **Insomnia** ou se possuir o VsCode instalado em sua máquina, pode fazer download de uma extensão chamada **Thunder Client**.

### Sobre
Projeto foi feito utilizando **Node.js**, **Express**, **SQLite3**, como uma biblioteca para simular o banco de dados. Na organização do código utilizamos como padrão **Models** e **Controllers**.
Com intuito de não ferir o princícipio da responsabilidade única, foi utilizado o design patters DAO (Data Acess Object), separando a lógica de negócios da lógica de persitência de dados o arquivo e facilitando muito na hora de fazer a manutenção do código.