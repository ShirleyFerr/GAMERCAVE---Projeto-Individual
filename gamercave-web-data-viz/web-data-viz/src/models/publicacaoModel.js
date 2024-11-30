var database = require("../database/config");

function listarPublis(){
    var instrucaoSql = 
    `
        SELECT p.conteudo as contentPubli, u.nome as userPubli, u.username as usernamePubli
        from publicacao as p 
        JOIN usuario as u
        where p.fkUser = u.idUser
    `
    return database.executar(instrucaoSql);
}

function criarNewPubli(){
    var instrucaoSql = `
        INSERT INTO publicacao (conteudo, fkUser) values 
        ('${publiContent}', ${idUser})
    `
    return database.executar(instrucaoSql);
}   

module.exports = {
    listarPublis,
    criarNewPubli
}