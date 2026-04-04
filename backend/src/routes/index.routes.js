const express = require("express");
const router = express.Router();

const usuariosRoutes = require("./usuarios.routes");
const sucursalesRoutes = require("./sucursales.routes");
const dogRoutes = require("./dog.routes");
const catRoutes = require("./cat.routes");
const weatherRoutes = require("./weather.routes");

router.use("/usuarios", usuariosRoutes);
router.use("/sucursales", sucursalesRoutes);
router.use("/dogs", dogRoutes);
router.use("/cats", catRoutes);
router.use("/weather", weatherRoutes);

module.exports = router;