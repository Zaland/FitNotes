import { Request, Response, NextFunction } from "express";
import { validate } from "uuid";

import knex from "../../db";

export class Settings {
  getSettings = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;

      if (!validate(id)) {
        return res.status(400).send("Invalid uuid");
      }

      const result = await knex("user_settings").where({ user_id: id }).first();

      if (result) {
        return res.json(result);
      }

      res.sendStatus(404);
    } catch (_error) {
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

      const userSetting = await knex("user_settings")
        .where({ user_id: id })
        .first();

      if (userSetting) {
        await knex("user_settings").where({ user_id: id }).update(data);
        return res.sendStatus(200);
      }

      res.sendStatus(404);
    } catch (_error) {
      res.sendStatus(500);
    }
  };
}

export const SettingsController = new Settings();
