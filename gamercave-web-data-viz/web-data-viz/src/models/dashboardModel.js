var database = require("../database/config");

function listar() {
    var instrucaoSql1 = 
        `SELECT generoFav, COUNT(*) as quantidadePessoas
         FROM preferencia 
         GROUP BY generoFav;`;
    
    var instrucaoSql2 = 
        `SELECT dispositivoFav, COUNT(*) as quantidadePessoas
         FROM preferencia
         GROUP BY dispositivoFav;`;
    
    var instrucaoSql3 = 
        `SELECT AVG(qtdJogos) as mediaJogosPorJogador
         FROM preferencia;`;
    
    return database.executar(instrucaoSql1)
        .then(result1 => {
            console.log("Resultado da consulta de Gênero Favorito: ", result1);
            return database.executar(instrucaoSql2)
                .then(result2 => {
                    console.log("Resultado da consulta de Dispositivo Favorito: ", result2);
                    return database.executar(instrucaoSql3)
                        .then(result3 => {
                            console.log("Resultado da consulta de Média de Jogos por Jogador: ", result3);
                            return [
                                result1, //  dados do genero favorito
                                result2, //  dados do dispositivo favorito
                                result3  //  dados da media de jogos
                            ];
                        });
                });
        })
        .catch(error => {
            console.error("Erro ao executar as instruções:", error);
            throw error;
        });
}


module.exports = {
    listar
}