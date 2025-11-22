import { Router } from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import { metodoPagamentoController } from "../controllers/metodo-pagamento-controller.js";

const router = Router();

router.use(verifyToken);

router.get("/list", metodoPagamentoController.list);

export default router;
