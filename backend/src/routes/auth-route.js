import { Router } from "express";
import { authController } from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);

router.use(verifyToken);

// router.put("/update/:id", authController.update);
// router.delete("/delete/:id", authController.remove);

export default router;
