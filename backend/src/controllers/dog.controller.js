const {
    getDogBreeds
} = require("../services/dogApi.service");

const obtenerRazasPerros = async (req, res) => {

    try {

        const razas = await getDogBreeds();

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
    obtenerRazasPerros
};