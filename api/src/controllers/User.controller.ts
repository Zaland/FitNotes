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

      if (result) {
        res.json(result);
      } else {
        res.status(404).send({ message: id });
      }
    } catch (error) {
      res.sendStatus(500);
    }
  };

  createUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id, email, firstName, lastName } = req.body;

      const response = await knex("users").where({ id }).first();

      if (response) {
        return res.status(400).send({ message: response });
      }

      await knex("users").insert({
        id,
        email,
        first_name: firstName,
        last_name: lastName,
      });
      await knex("user_settings").insert({ id: randomUUID(), user_id: id });

      res.sendStatus(200);
    } catch (error) {
      res.send(error);
    }
  };
}

export const UserController = new User();
