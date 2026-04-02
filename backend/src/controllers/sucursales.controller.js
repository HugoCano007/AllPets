const {
    getCoordinates
} = require("../services/maps.service");

const registrarSucursal = async (req, res) => {

    try {

        const { direccion, telefono } = req.body;

        if (!direccion) {
            return res.status(400).json({
                error: "La dirección es obligatoria"
            });
        }

        const coordenadas = await getCoordinates(direccion);

        const sucursal = {
            direccion,
            telefono,
            latitud: coordenadas.latitud,
            longitud: coordenadas.longitud
        };

        res.json({
            message: "Sucursal registrada correctamente",
            data: sucursal
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

module.exports = {
    registrarSucursal
};