const { expect } = require("chai")
const pokemonapi = require("../api/pokemonapi.js")

const mon = "charmander"
const attack = "ember"

// skipped so not ran with other tests
describe.skip("Pokemon Move Checker", function () {
    describe.only("Move Checker", function () { // .only can be left on here if test unskipped
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