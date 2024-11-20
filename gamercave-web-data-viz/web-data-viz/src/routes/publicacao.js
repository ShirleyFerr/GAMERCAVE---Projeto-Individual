var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.get("/listarPublis", function (req, res) { 
    publicacaoController.listarPublis(req, res);
});

module.exports = router;