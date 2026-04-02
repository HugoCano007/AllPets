const express = require("express");
const router = express.Router();

const {
    registrarSucursal
} = require("../controllers/sucursales.controller");

router.post("/", registrarSucursal);

module.exports = router;