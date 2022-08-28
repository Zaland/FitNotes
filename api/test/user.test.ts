process.env.ENVIRONMENT = "test";

import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../src/app";

describe("User routes", () => {
  const agent = request(app);

  describe("GET /user/:id", () => {
    it("get user with invalid uuid", async () => {
      const response = await agent.get("/user/234");
      expect(response.statusCode).to.equal(400);
    });

    it("get user that exists", async () => {
      const response = await agent.get(
        "/user/ff3a5bd5-3baa-4054-ae3e-13349a200cf6"
      );
      expect(response.statusCode).to.equal(200);
    });

    it("get user that doesn't exist", async () => {
      const response = await agent.get(
        "/user/f817551c-447a-4c1d-95ab-d7a44c3952a6"
      );
      expect(response.statusCode).to.equal(404);
    });
  });

  describe("POST /user", () => {
    it("create user that doesn't exist", async () => {
      const response = await agent.post("/user").send({
        id: "aff180e9-65e8-4d47-87a8-05c261f45f8d",
        email: "jameswick@gmail.com",
        firstName: "James",
        lastName: "Wick",
      });
      expect(response.statusCode).to.equal(200);
    });

    it("create user that already exists", async () => {
      const response = await agent.post("/user").send({
        id: "ff3a5bd5-3baa-4054-ae3e-13349a200cf6",
        email: "johnwick@gmail.com",
        firstName: "John",
        lastName: "Wick",
      });
      expect(response.statusCode).to.equal(400);
    });
  });

  describe("DELETE /user/:id", () => {
    it("delete user with invalid uuid", async () => {
      const response = await agent.delete("/user/234");
      expect(response.statusCode).to.equal(400);
    });

    it("delete user that exists", async () => {
      const response = await agent.delete(
        "/user/aff180e9-65e8-4d47-87a8-05c261f45f8d"
      );
      expect(response.statusCode).to.equal(200);
    });

    it("delete user that doesn't exists", async () => {
      const response = await agent.delete(
        "/user/aff180e9-65e8-4d47-87a8-05c261f45f8b"
      );
      expect(response.statusCode).to.equal(204);
    });
  });
});
