import { Router } from "express";
import { UserController } from "../controllers/User.controller";

const router = Router();

router.get("/:id", UserController.getUser);
router.post("", UserController.createUser);
router.get("/:id/settings", UserController.getSettings);
router.put("/:id/settings", UserController.updateSettings);

export default router;
