var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/dashboard", function (req, res) { // ou é /dash?
    dashController.dashboard(req, res);
});

module.exports = router;