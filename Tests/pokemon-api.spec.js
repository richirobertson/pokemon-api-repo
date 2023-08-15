const { expect } = require("chai")
const pokemonapi = require("../api/pokemonapi.js")

describe.only("/pokemon API Tests", function () {
    describe("Response Contains the Expected Data", async function () {
        const mon = "pikachu"
        before(async function () {
            response = await pokemonapi.pokemon(mon);
        })
        it("Returns the Correct Ability Data", function () {
            expect(response.body).to.have.property("abilities");
            expect(response.body.abilities).to.be.an("array");
            expect(response.body.abilities[0]).to.have.property("ability");
            expect(response.body.abilities[0].ability).to.have.property("name");
            expect(response.body.abilities[0].ability.name).to.be.a("string");
            expect(response.body.abilities[0].ability).to.have.property("url");
            expect(response.body.abilities[0].ability.url).to.be.a("string");
            expect(response.body.abilities[0].ability.url).to.contain("https://pokeapi.co/api/v2/ability/");
            expect(response.body.abilities[0]).to.have.property("is_hidden");
            expect(response.body.abilities[0].is_hidden).to.be.a("boolean");
            expect(response.body.abilities[0]).to.have.property("slot");
            expect(response.body.abilities[0].slot).to.be.a("number");
        })
        it("Returns the Correct Base Exp Data", function () {
            expect(response.body).to.have.property("base_experience");
            expect(response.body.base_experience).to.be.a("number");
            expect(response.body).to.have.property("forms");
            expect(response.body.forms).to.be.an("array");
            expect(response.body.forms[0]).to.have.property("name");
            expect(response.body.forms[0].name).to.be.a("string");
            expect(response.body.forms[0].name).to.equal(`${mon}`);
            expect(response.body.forms[0]).to.have.property("url");
            expect(response.body.forms[0].url).to.be.a("string");
            expect(response.body.forms[0].url).to.contain("https://pokeapi.co/api/v2/pokemon-form/");            
        })
        it("Returns the Correct Game Indices Data", function () {
            expect(response.body).to.have.property("game_indices");
            expect(response.body.game_indices).to.be.an("array");
            expect(response.body.game_indices[0]).to.have.property("game_index");
            expect(response.body.game_indices[0].game_index).to.be.a("number");
            expect(response.body.game_indices[0]).to.have.property("version");
            expect(response.body.game_indices[0].version).to.have.property("name");
            expect(response.body.game_indices[0].version.name).to.be.a("string");
            expect(response.body.game_indices[0].version).to.have.property("url");
            expect(response.body.game_indices[0].version.url).to.be.a("string");
            expect(response.body.game_indices[0].version.url).to.contain("https://pokeapi.co/api/v2/version/");
        })
        it("Returns the Correct Height Data", function () {
            expect(response.body).to.have.property("height");
            expect(response.body.height).to.be.a("number");
        })
        it("Returns the Correct Held Item Data", function () {
            expect(response.body).to.have.property("held_items");
            expect(response.body.held_items).to.be.an("array");
            expect(response.body.held_items[0]).to.have.property("item");
            expect(response.body.held_items[0].item).to.have.property("name");
            expect(response.body.held_items[0].item.name).to.be.a("string");
            expect(response.body.held_items[0].item).to.have.property("url");
            expect(response.body.held_items[0].item.url).to.be.a("string");
            expect(response.body.held_items[0].item.url).to.contain("https://pokeapi.co/api/v2/item/");
            expect(response.body.held_items[0]).to.have.property("version_details");
            expect(response.body.held_items[0].version_details).to.be.an("array");
            expect(response.body.held_items[0].version_details[0]).to.have.property("rarity");
            expect(response.body.held_items[0].version_details[0].rarity).to.be.a("number");
            expect(response.body.held_items[0].version_details[0]).to.have.property("version");
            expect(response.body.held_items[0].version_details[0].version).to.have.property("name");
            expect(response.body.held_items[0].version_details[0].version.name).to.be.a("string");
            expect(response.body.held_items[0].version_details[0].version).to.have.property("url");
            expect(response.body.held_items[0].version_details[0].version.url).to.be.a("string");
            expect(response.body.held_items[0].version_details[0].version.url).to.contain("https://pokeapi.co/api/v2/version/");
        })
        it("Returns the Expected ID Data", function () {
            expect(response.body).to.have.property("id");
            expect(response.body.id).to.be.a("number");
        })
        it("Returns the 'is_default' Data", function () {
            expect(response.body).to.have.property("is_default");
            expect(response.body.is_default).to.be.a("boolean");
        })
        it("Returns the Expected Location Area Encounters Data", function () {
            const idNumber = (response.body.id);
            expect(response.body).to.have.property("location_area_encounters");
            expect(response.body.location_area_encounters).to.be.a("string");
            expect(response.body.location_area_encounters).to.contain(`https://pokeapi.co/api/v2/pokemon/${idNumber}/encounters`);
        })
        it("Returns the Expected Move Data", function () {
            expect(response.body).to.have.property("moves");
            expect(response.body.moves).to.be.an("array");
            expect(response.body.moves[0]).to.have.property("move");
            expect(response.body.moves[0].move).to.have.property("name");
            expect(response.body.moves[0].move.name).to.be.a("string");
            expect(response.body.moves[0].move).to.have.property("url");
            expect(response.body.moves[0].move.url).to.be.a("string");
            expect(response.body.moves[0].move.url).to.contain("https://pokeapi.co/api/v2/move/");
            expect(response.body.moves[0]).to.have.property("version_group_details");
            expect(response.body.moves[0].version_group_details).to.be.an("array");
            expect(response.body.moves[0].version_group_details[0]).to.have.property("level_learned_at");
            expect(response.body.moves[0].version_group_details[0].level_learned_at).to.be.a("number");
            expect(response.body.moves[0].version_group_details[0]).to.have.property("move_learn_method");
            expect(response.body.moves[0].version_group_details[0].move_learn_method).to.have.property("name");
            expect(response.body.moves[0].version_group_details[0].move_learn_method.name).to.be.a("string");
            expect(response.body.moves[0].version_group_details[0].move_learn_method).to.have.property("url");
            expect(response.body.moves[0].version_group_details[0].move_learn_method.url).to.be.a("string");
            expect(response.body.moves[0].version_group_details[0].move_learn_method.url).to.contain("https://pokeapi.co/api/v2/move-learn-method/");
            expect(response.body.moves[0].version_group_details[0]).to.have.property("version_group");
            expect(response.body.moves[0].version_group_details[0].version_group).to.have.property("name");
            expect(response.body.moves[0].version_group_details[0].version_group.name).to.be.a("string");
            expect(response.body.moves[0].version_group_details[0].version_group).to.have.property("url");
            expect(response.body.moves[0].version_group_details[0].version_group.url).to.be.a("string");
            expect(response.body.moves[0].version_group_details[0].version_group.url).to.contain("https://pokeapi.co/api/v2/version-group/");
        })
        it("Returns the Expected Name Data", function () {
            expect(response.body).to.have.property("name");
            expect(response.body.name).to.equal(`${mon}`);
        })
    })
})