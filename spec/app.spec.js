process.env.NODE_ENV = "test";
const { app } = require("../app");
const request = require("supertest")(app);
const chai = require("chai");
const chaiSorted = require("chai-sorted");
const { expect } = chai;
const { connection } = require("../connection");

chai.use(chaiSorted);

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/shoes", () => {
    it("GET responds with status: 200 and an array of shoe objects", () => {
      return request
        .get("/api/shoes")
        .expect(200)
        .then(({ body: { shoes } }) => {
          expect(shoes).to.be.a("array");
          expect(shoes.length).to.equal(15);
        });
    });
    it("shoes can be filtered by size", () => {
      return request
        .get("/api/shoes?size=4")
        .expect(200)
        .then(({ body: { shoes } }) => {
          expect(shoes).to.be.a("array");
          expect(shoes.length).to.equal(3);
        });
    });
  });
  describe("/shoes/:shoe_id", () => {
    it("GET responds with status: 200 and relevant shoes", () => {
      return request
        .get("/api/shoes/1")
        .expect(200)
        .then(({ body: { shoes } }) => {
          expect(shoes[0].shoe_name).to.equal("Nike Air Force");
        });
    });
  });
});
