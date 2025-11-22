import { Router } from "express";
import { agendamentoController } from "../controllers/agendamento-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/list", agendamentoController.list);
router.get("/list/:id", agendamentoController.getId);
router.post("/insert", agendamentoController.insert);
router.put("/update/:id", agendamentoController.update);
router.put("/updateStatus/:id", agendamentoController.updateStatus);
router.delete("/remove/:id", agendamentoController.remove);

export default router;
