process.env.ENVIRONMENT = "test";

import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../src/app";

describe("User settings routes", () => {
  const agent = request(app);

  describe("GET /:id/settings", () => {
    it("get user settings with invalid uuid", async () => {
      const response = await agent.get("/user/234/settings");
      expect(response.statusCode).to.equal(400);
    });

    it("get user settings that exists", async () => {
      const response = await agent.get(
        "/user/ff3a5bd5-3baa-4054-ae3e-13349a200cf6/settings"
      );
      expect(response.statusCode).to.equal(200);
    });

    it("get user settings that doesn't exist", async () => {
      const response = await agent.get(
        "/user/f817551c-447a-4c1d-95ab-d7a44c3952a6/settings"
      );
      expect(response.statusCode).to.equal(404);
    });
  });

  describe("PUT /:id/settings", () => {
    it("update user settings with invalid uuid", async () => {
      const response = await await agent
        .put("/user/234/settings")
        .send({ data: { dark_mode: true } });
      expect(response.statusCode).to.equal(400);
    });

    it("update user settings that exist", async () => {
      const response = await agent
        .get("/user/ff3a5bd5-3baa-4054-ae3e-13349a200cf6/settings")
        .send({ data: { dark_mode: true } });
      expect(response.statusCode).to.equal(200);
    });

    it("update user settings that doesn't exist", async () => {
      const response = await agent
        .get("/user/f817551c-447a-4c1d-95ab-d7a44c3952a6/settings")
        .send({ data: { dark_mode: true } });
      expect(response.statusCode).to.equal(404);
    });
  });
});
