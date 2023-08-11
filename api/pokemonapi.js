const request = require("supertest");
const url = "https://pokeapi.co/api/v2";

async function pokemon(pokemonName) {
    const response = await request(url)
        .get(`/pokemon/${pokemonName}`)
    if (response.status == 200) { return response; }
    console.error(response.body);
    throw new Error(`Received status code ${response.status} when attempting to GET to: /pokemon/${pokemonName}`)
}

module.exports = {
    pokemon
}