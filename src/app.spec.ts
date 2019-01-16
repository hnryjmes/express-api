import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import app from "./app";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Hello API Request", () => {
  it("should return hello on call", async () => {
    return chai.request(app).get("/")
      .then((res) => {
        expect(res.text).to.eql("hello");
      });
  });
});
