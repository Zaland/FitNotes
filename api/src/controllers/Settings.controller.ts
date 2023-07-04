import { Request, Response, NextFunction } from "express";

import knex from "../../db";

export class Settings {
  getSettings = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;

      const result = await knex("user_settings")
        .join("users", "users.id", "user_settings.user_id")
        .where("users.auth_id", id)
        .select("dark_mode")
        .first();

      if (result) {
        return res.json(result);
      }

      res.status(404).send("User does not exist");
    } catch (_error) {
      res.sendStatus(500);
    }
  };

  updateSettings = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const { data } = req.body;

      const { user_id } = await knex("user_settings")
        .join("users", "users.id", "user_settings.user_id")
        .where("users.auth_id", id)
        .select("user_id")
        .first();

      if (user_id) {
        await knex("user_settings").where({ user_id }).update(data);
        return res.sendStatus(200);
      }

      res.sendStatus(404);
    } catch (_error) {
      res.sendStatus(500);
    }
  };
}

export const SettingsController = new Settings();
