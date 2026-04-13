const {
    buscarEspecie
} = require("../services/gbif.service");

const validarEspecie = async (req, res) => {

    try {

        const { nombre } = req.query;

        if (!nombre) {

            return res.status(400).json({
                error: "Debe enviar el nombre de la especie"
            });

        }

        const especie = await buscarEspecie(nombre);

        if (!especie) {

            return res.status(404).json({
                error: "Especie no encontrada"
            });

        }

        res.json(especie);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    validarEspecie
};