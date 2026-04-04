const {
    getWeatherByCoords
} = require("../services/weather.service");

const obtenerClima = async (req, res) => {

    try {

        const { lat, lon } = req.query;

        const clima = await getWeatherByCoords(lat, lon);

        res.json(clima);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    obtenerClima
};