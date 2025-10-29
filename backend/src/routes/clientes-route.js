import { Router } from "express";
import { clientesController } from "../controllers/clientes-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/list", clientesController.list);
router.get("/list/:id", clientesController.getId);
router.post("/insert", clientesController.insert);
router.put("/update/:id", clientesController.update);
router.delete("/remove/:id", clientesController.remove);

export default router;
