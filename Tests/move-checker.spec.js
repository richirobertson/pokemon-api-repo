const { expect } = require("chai")
const pokemonapi = require("../api/pokemonapi.js")

const mon = "charmander"
const attack = "ember"

describe("Pokemon API Tests", function () {
    describe("Move Checker", function () {
        before(async function () {
            response = await pokemonapi.pokemon(mon)
        })
        it(`${mon} can learn ${attack}!`, function () {
            const move = response.body.moves.find(function (ability) {
                return ability.move.name == attack;
            })
            expect(move).to.not.be.undefined;
        })
    })
});