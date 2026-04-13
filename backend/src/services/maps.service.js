const axios = require("axios");

const obtenerCoordenadas = async (direccion) => {

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

    const lugar = response.data[0];

    if (!lugar) {

        return null;

    }

    return {

        direccion: lugar.display_name,
        latitud: lugar.lat,
        longitud: lugar.lon

    };

};

module.exports = {
    obtenerCoordenadas
};