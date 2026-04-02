const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api.thedogapi.com/v1";

const getDogBreeds = async () => {

    try {

        const response = await axios.get(
            `${API_URL}/breeds`,
            {
                headers: {
                    "x-api-key": process.env.DOG_API_KEY
                }
            }
        );

        return response.data;

    } catch (error) {

        throw new Error("Error obteniendo razas de perros");

    }

};

module.exports = {
    getDogBreeds
};