import { Router } from "express";
import { estatisticasController } from "../controllers/estatisticas-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.post("/dash", estatisticasController.getDadosDashboard);

export default router;
