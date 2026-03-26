const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Listado de usuarios funcionando"
    });
});

router.post("/", (req, res) => {

    const { nombre, correo } = req.body;

    res.json({
        message: "Usuario recibido correctamente",
        data: {
            nombre,
            correo
        }
    });

});

module.exports = router;