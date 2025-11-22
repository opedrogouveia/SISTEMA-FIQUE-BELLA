import { agendamentoService } from "../services/agendamento-service.js";

async function list(req, res) {
  try {
    const agendamentos = await agendamentoService.list();
    res.status(200).json(agendamentos);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

async function getId(req, res) {
  try {
    const agendamento = await agendamentoService.getId(req.params.id);
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function insert(req, res) {
  try {
    const agendamento = await agendamentoService.insert(req.body);
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function update(req, res) {
  try {
    const agendamento = await agendamentoService.update(
      req.params.id,
      req.body
    );
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function remove(req, res) {
  try {
    const agendamento = await agendamentoService.remove(req.params.id);
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
async function updateStatus(req, res) {
  try {
    const agendamento = await agendamentoService.updateStatus(
      req.params.id,
      req.body.status,
      req.body.metodo_pagamento_id,
      req.body.valor_total
    );
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
export const agendamentoController = {
  list,
  getId,
  insert,
  update,
  remove,
  updateStatus,
};
