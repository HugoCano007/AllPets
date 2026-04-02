const {
    getCatBreeds
} = require("../services/catApi.service");

const obtenerRazasGatos = async (req, res) => {

    try {

        const razas = await getCatBreeds();

        res.json({
            total: razas.length,
            data: razas
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    obtenerRazasGatos
};