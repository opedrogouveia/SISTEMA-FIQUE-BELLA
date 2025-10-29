import { Router } from "express";
import { servicosController } from "../controllers/servicos-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/list", servicosController.list);
router.get("/list/:id", servicosController.getId);
router.post("/insert", servicosController.insert);
router.put("/update/:id", servicosController.update);
router.delete("/remove/:id", servicosController.remove);

export default router;
