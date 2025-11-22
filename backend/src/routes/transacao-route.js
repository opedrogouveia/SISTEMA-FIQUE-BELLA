import { Router } from "express";
import { transacaoController } from "../controllers/transacao-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/list", transacaoController.list);
router.post("/insert", transacaoController.insert);
router.put("/update/:id", transacaoController.update);
router.delete("/remove/:id", transacaoController.remove);

export default router;
