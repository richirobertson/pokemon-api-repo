const request = require("supertest")
const{expect}  = require("chai") 

describe("Pokemon API Tests", function () {
        it("Knows Umbreon is the Best", async function () {
            const response = await request("https://pokeapi.co/api/v2")
                .get("/pokemon/umbreon");
            console.log(response.body)
            expect(response.body).to.have.property("stats");
            expect(response.body.stats).to.be.an("array");
            expect(response.body.stats).to.have.a.lengthOf(6);
            expect(response.body.stats[4]).to.have.property("base_stat", 130);
            expect(response.body.stats[4]).to.have.property("effort");
            expect(response.body.stats[4].effort).to.be.greaterThan(0);
        })
    });