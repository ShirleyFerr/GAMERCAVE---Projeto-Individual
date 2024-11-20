var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listar", function (req, res) { // ou é /dash?
    dashController.listar(req, res);
});

module.exports = router;