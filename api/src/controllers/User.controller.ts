import { Request, Response, NextFunction } from "express";
import { validate } from "uuid";
import { randomUUID } from "crypto";

import knex from "../../db";

export class User {
  getUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;

      if (!validate(id)) {
        return res.status(400).send("Invalid uuid");
      }

      const result = await knex("users").where("id", id).first();
      res.json(result);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  createUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id, email, firstName, lastName } = req.body;

      await knex("users").insert({
        id,
        email,
        first_name: firstName,
        last_name: lastName,
      });
      await knex("user_settings").insert({ id: randomUUID(), user_id: id });

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  getSettings = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;

      if (!validate(id)) {
        return res.status(400).send("Invalid uuid");
      }

      const result = await knex("user_settings").where("user_id", id).first();
      res.json(result);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  updateSettings = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const { data } = req.body;

      if (!validate(id)) {
        return res.status(400).send("Invalid uuid");
      }

      const result = await knex("user_settings")
        .where("user_id", id)
        .update(data);

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export const UserController = new User();
