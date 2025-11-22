import { transacaoService } from "../services/transacao-service.js";

async function list(req, res) {
  try {
    const transacoes = await transacaoService.list();
    res.status(200).json(transacoes);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function insert(req, res) {
  try {
    const transacao = await transacaoService.insert(req.body);
    res.status(200).json(transacao);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function update(req, res) {
  try {
    const transacao = await transacaoService.update(req.params.id, req.body);
    res.status(200).json(transacao);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function remove(req, res) {
  try {
    const transacao = await transacaoService.remove(req.params.id);
    res.status(200).json(transacao);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
export const transacaoController = {
  list,
  insert,
  update,
  remove,
};
