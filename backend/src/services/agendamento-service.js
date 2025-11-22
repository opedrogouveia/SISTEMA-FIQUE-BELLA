import { agendamentoRepository } from "../repositories/agendamento-repository.js";
import { transacaoService } from "./transacao-service.js";
import { validateAgendamento } from "../schemas/agendamento-schema.js";

async function list() {
  try {
    return await agendamentoRepository.list();
  } catch (err) {
    throw err;
  }
}
async function getId(id) {
  try {
    const agendamento = await agendamentoRepository.getId(id);
    if (!agendamento || agendamento == []) {
      const err = new Error("Agendamento não encontrado.");
      err.status = 404;
      throw err;
    }
    return agendamento;
  } catch (err) {
    throw err;
  }
}

async function insert(agendamento) {
  try {
    const validAgendamento = validateAgendamento.parse(agendamento);
    return await agendamentoRepository.insert(validAgendamento);
  } catch (err) {
    err.status = err.status || 500;
    throw err;
  }
}
async function update(id, agendamento) {
  try {
    const validAgendamento = validateAgendamento.parse(agendamento);
    return await agendamentoRepository.update(id, validAgendamento);
  } catch (err) {
    err.status = err.status || 500;
    throw err;
  }
}
async function remove(id) {
  try {
    return agendamentoRepository.remove(id);
  } catch (err) {
    throw err;
  }
}

async function updateStatus(id, status, metodo_pagamento_id, valor_total) {
  try {
    let agendamento = await getId(id);
    agendamento.status = status;
    const retornoAgendamento = await agendamentoRepository.update(
      id,
      agendamento
    );
    if (agendamento.status === "Concluído") {
      const transacao = {
        cliente_id: agendamento.cliente_id,
        agendamento_id: agendamento.agendamento_id,
        metodo_pagamento_id: metodo_pagamento_id,
        valor_pago: valor_total,
      };
      await transacaoService.insert(transacao);
    }
    return retornoAgendamento;
  } catch (err) {
    throw err;
  }
}

export const agendamentoService = {
  list,
  getId,
  insert,
  update,
  remove,
  updateStatus,
};
