var database = require("../database/config");

function listarPublis(){
    var instrucaoSql = 
    `
    select p.idPubli, p.conteudo as contentPubli, 
    u.nome as userPubli, u.username as usernamePubli, 
    DATE_FORMAT(p.dtPubli, '%d/%m/%Y às %H:%i:%s') as DtPublicacao 
    from publicacao as p 
    JOIN usuario as u 
    where p.fkUser = u.idUser 
    order by dtPubli;
    `
    return database.executar(instrucaoSql);
}

function criarNewPubli(publiContent, idUser){
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