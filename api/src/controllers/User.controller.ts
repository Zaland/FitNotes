import { Request, Response, NextFunction } from "express";
import { validate } from "uuid";

import knex from "../../db";

const validateUuid = (uuid: string) => {};

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
}

export const UserController = new User();
