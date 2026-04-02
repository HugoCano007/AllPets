const express = require("express");
const router = express.Router();

const usuariosRoutes = require("./usuarios.routes");
const sucursalesRoutes = require("./sucursales.routes");
const dogRoutes = require("./dog.routes");

router.use("/usuarios", usuariosRoutes);
router.use("/sucursales", sucursalesRoutes);
router.use("/dogs", dogRoutes);

module.exports = router;