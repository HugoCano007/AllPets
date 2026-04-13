const axios = require("axios");

const traduccionesVeterinarias = {
    perro: "Canis lupus familiaris",
    gato: "Felis catus",
    caballo: "Equus ferus caballus",
    conejo: "Oryctolagus cuniculus",
    hamster: "Mesocricetus auratus",
    tortuga: "Testudines",
    loro: "Psittaciformes"
};

const buscarEspecie = async (nombre) => {

    try {

        const nombreNormalizado = nombre.toLowerCase();

        const nombreCientifico =
            traduccionesVeterinarias[nombreNormalizado] || nombre;

        const response = await axios.get(
            "https://api.gbif.org/v1/species/search",
            {
                params: {
                    q: nombreCientifico,
                    limit: 1
                }
            }
        );

        const especie = response.data.results[0];

        if (!especie) {
            return null;
        }

        return {
            especie: especie.canonicalName,
            nombreComun: nombre,
            rank: especie.rank,
            estado: especie.taxonomicStatus
        };

    } catch (error) {

        throw new Error("Error consultando GBIF");

    }

};

module.exports = {
    buscarEspecie
};