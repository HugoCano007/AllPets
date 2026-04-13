const express = require("express");
const router = express.Router();

const usuariosRoutes = require("./usuarios.routes");
const sucursalesRoutes = require("./sucursales.routes");
const dogRoutes = require("./dog.routes");
const catRoutes = require("./cat.routes");
const weatherRoutes = require("./weather.routes");
const gbifRoutes = require("./gbif.routes");

router.use("/usuarios", usuariosRoutes);
router.use("/sucursales", sucursalesRoutes);
router.use("/dogs", dogRoutes);
router.use("/cats", catRoutes);
router.use("/weather", weatherRoutes);
router.use("/gbif", gbifRoutes);

module.exports = router;