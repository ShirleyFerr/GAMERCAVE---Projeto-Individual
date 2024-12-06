
var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPerfilUsuario(idUser) {

    var instrucaoSql = `SELECT * FROM usuario WHERE idUser = ${idUser}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }


function cadastrar(nome, email, username, dtNasc, senha, genFav, devFav, qtdJogos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, email, username, dtNasc, senha);

    // Primeira query para inserir no usuario
    var instrucaoSql = `
        INSERT INTO usuario (nome, username, email, dtNasc, senha) 
        VALUES ('${nome}', '${username}', '${email}', '${dtNasc}', '${senha}');
        `;
    
    // Segunda query para inserir na tabela de preferências
    var instrucaoSql2 = `
        INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) 
        VALUES ('${genFav}', '${devFav}', ${qtdJogos});
        `;

    console.log("Executando a instrução SQL 1: \n" + instrucaoSql);
    
    // Execute a primeira consulta no mySQL (inserir usuario)
    return database.executar(instrucaoSql)
        .then(result => {
            console.log("Usuário inserido com sucesso. Executando a segunda instrução...");
            console.log("Executando a instrução SQL 2: \n" + instrucaoSql2);

            // Execute a segunda consulta no mySQL (inserir preferências)
            return database.executar(instrucaoSql2);
        })
        .catch(error => {
            console.error("Erro ao executar as instruções:", error);
            throw error; // Lança o error
        });
}

function atualizarBio(contentBio, idUsuario){
    var instrucaoSql = `
        UPDATE usuario set biografia = '${contentBio}' where idUser = ${idUsuario}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarPerfilUsuario,
    atualizarBio
};
