import { Router } from "express";
import { funcionariosController } from "../controllers/funcionarios-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/list", funcionariosController.list);
router.get("/list/:id", funcionariosController.getId);
router.post("/insert", funcionariosController.insert);
router.put("/update/:id", funcionariosController.update);
router.delete("/remove/:id", funcionariosController.remove);

export default router;
