
## Projeto API Rest criada em NODEJS, fornece serviço de cadastro de funcionarios de uma hamburgueria. 

### Tecnologias Utilizadas
1. Git
2. Node.js
   
#### Após fazer o download e a instalação dos programas faça um clone do repositório em sua máquina.

1. Abra o terminal do git e execute o comando:
` https://github.com/TeixeiraFP/API_Hamburgueria.git `

2. Execute em um terminal dentro da pasta onde foi hospedado o clone do projeto o comando:
` npm install`     
***O comando npm instal irá instalar todas dependências necessárias para o funcionamento do projeto***
***no arquivo package.json você tem acesso a qual são essas dependência.***

1. Execute uma vez, **apenas umas vez** o comando:
` node ./src/data/create-and-populate `
***Esse comando irá criar e popular seu BD.***

4. Por fim  Com todas dependências instaladas e o BD criado, execute o comando:
` npm run dev `

Agora você pode utilizar o projeto e testas as rotas, **GET**, **PUT**, **POST** e **DELETE**, para realizar os teste você pode usar o **Postman**, **Insomnia** ou se possuir o VsCode instalado em sua máquina, pode fazer download de uma extensão chamada **Thunder Client**.

### Sobre
Projeto foi feito utilizando **Node.js**, **Express**, **SQLite3**, como uma biblioteca para simular o banco de dados. Na organização do código utilizamos como padrão **Models** e **Controllers**.
Com intuito de não ferir o princícipio da responsabilidade única, foi utilizado o design patters DAO (Data Acess Object), separando a lógica de negócios da lógica de persitência de dados o arquivo e facilitando muito na hora de fazer a manutenção do código.