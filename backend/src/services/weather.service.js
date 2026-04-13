const axios = require("axios");

const getWeatherByCoords = async (lat, lon) => {

    try {

        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    lat,
                    lon,
                    appid: process.env.WEATHER_API_KEY,
                    units: "metric",
                    lang: "es"
                }
            }
        );

        const data = response.data;

        return {

            ciudad: data.name,
            pais: data.sys.country,
            temperatura: data.main.temp,
            humedad: data.main.humidity,
            descripcion: data.weather[0].description

        };

    } catch (error) {

        throw new Error("Error obteniendo clima");

    }

};

module.exports = {
    getWeatherByCoords
};