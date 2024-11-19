var database = require("../database/config");

function dashboard() {
    var instrucaoSql = `
        SELECT * FROM preferencia;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dashboard
}