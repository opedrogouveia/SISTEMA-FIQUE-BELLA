import { metodoPagamentoService } from "../services/metodo-pagamento-service.js";

async function list(req, res) {
  try {
    const metodosPagamento = await metodoPagamentoService.list();
    res.status(200).json(metodosPagamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export const metodoPagamentoController = {
  list,
};
