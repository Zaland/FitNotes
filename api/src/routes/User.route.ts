import { Router } from "express";
import { UserController, SettingsController } from "../controllers";

const router = Router();

router.get("/:id", UserController.getUser);
router.post("", UserController.createUser);

router.get("/:id/settings", SettingsController.getSettings);
router.put("/:id/settings", SettingsController.updateSettings);

export default router;
