const axios = require("axios");

const getDogBreeds = async () => {

    try {

        const response = await axios.get(
            "https://api.thedogapi.com/v1/breeds",
            {
                headers: {
                    "x-api-key": process.env.DOG_API_KEY
                }
            }
        );

        return response.data.map((breed) => ({

            raza: breed.name,
            pesoPromedio: breed.weight.metric,
            esperanzaVida: breed.life_span,
            temperamento: breed.temperament || "No disponible"

        }));

    } catch (error) {

        throw new Error("Error obteniendo razas de perros");

    }

};

module.exports = {
    getDogBreeds
};