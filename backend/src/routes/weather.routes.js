const express = require("express");
const router = express.Router();

const {
    obtenerClima
} = require("../controllers/weather.controller");

router.get("/", obtenerClima);

module.exports = router;