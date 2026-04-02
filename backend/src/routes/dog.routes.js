const express = require("express");
const router = express.Router();

const {
    obtenerRazasPerros
} = require("../controllers/dog.controller");

router.get("/breeds", obtenerRazasPerros);

module.exports = router;