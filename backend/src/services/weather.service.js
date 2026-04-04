const axios = require("axios");



const getWeatherByCoords = async (lat, lon) => {

    try {
        console.log(process.env.WEATHER_API_KEY);
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

        return response.data;

    } catch (error) {

        throw new Error("Error obteniendo clima");

    }

};

module.exports = {
    getWeatherByCoords
};