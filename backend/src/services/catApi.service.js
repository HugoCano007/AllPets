const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api.thecatapi.com/v1";

const getCatBreeds = async () => {

    try {

        const response = await axios.get(
            `${API_URL}/breeds`,
            {
                headers: {
                    "x-api-key": process.env.CAT_API_KEY
                }
            }
        );

        return response.data;

    } catch (error) {

        throw new Error("Error obteniendo razas de gatos");

    }

};

module.exports = {
    getCatBreeds
};