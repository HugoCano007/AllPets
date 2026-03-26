const express = require("express");
const router = express.Router();

const usuariosRoutes = require("./usuarios.routes");
const sucursalesRoutes = require("./sucursales.routes");

router.use("/usuarios", usuariosRoutes);
router.use("/sucursales", sucursalesRoutes);

module.exports = router;
