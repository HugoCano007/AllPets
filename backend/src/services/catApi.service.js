const axios = require("axios");

const getCatBreeds = async () => {

    try {

        const response = await axios.get(
            "https://api.thecatapi.com/v1/breeds",
            {
                headers: {
                    "x-api-key": process.env.CAT_API_KEY
                }
            }
        );

        return response.data.map((breed) => ({

            raza: breed.name,
            origen: breed.origin,
            esperanzaVida: breed.life_span,
            temperamento: breed.temperament

        }));

    } catch (error) {

        throw new Error("Error obteniendo razas de gatos");

    }

};

module.exports = {
    getCatBreeds
};