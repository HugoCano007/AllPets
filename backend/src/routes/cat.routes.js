const express = require("express");
const router = express.Router();

const {
    obtenerRazasGatos
} = require("../controllers/cat.controller");

router.get("/breeds", obtenerRazasGatos);

module.exports = router;