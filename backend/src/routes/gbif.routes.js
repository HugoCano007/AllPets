const express = require("express");
const router = express.Router();

const {
    validarEspecie
} = require("../controllers/gbif.controller");

router.get("/", validarEspecie);

module.exports = router;