import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import verificarToken from "../middleware/auth-middleware.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
