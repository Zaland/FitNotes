import { Router } from "express";
import { UserController } from "../controllers/User.controller";

const router = Router();

router.get("/:id", UserController.getUser);
router.get("/:id/settings", UserController.getSettings);

export default router;
