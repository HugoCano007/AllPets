const axios = require("axios");

const getCoordinates = async (direccion) => {

    try {

        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: direccion,
                    format: "json",
                    limit: 1
                },
                headers: {
                    "User-Agent": "vetcontrol-app"
                }
            }
        );

        if (response.data.length === 0) {
            throw new Error("Dirección no encontrada");
        }

        return {
            latitud: response.data[0].lat,
            longitud: response.data[0].lon
        };

    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCoordinates
};