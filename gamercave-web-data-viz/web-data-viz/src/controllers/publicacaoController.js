var publicacaoModel = require('../models/publicacaoModel');

function listarPublis(req, res){
    publicacaoModel.listarPublis.then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });

}

function criarNewPubli(req, res){
    var publiContent = req.body.publiContentServer;
    
    if (publiContent == undefined){
        res.status(400).send('A publicação está undefined;');
    } else 
        publicacaoModel.criarNewPubli(publiContent)
        .then (
            function (resultado){
                res.json(resultado);
            }
        ).catch (
            function (erro){
                console.log(erro);
                console.log(
                    '\n Houve um erro ao realizar a publicação', erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        );
    
    }




module.exports = {
    listarPublis,
    criarNewPubli
}
