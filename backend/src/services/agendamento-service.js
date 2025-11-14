import { agendamentoRepository } from "../repositories/agendamento-repository.js";
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
    // const valid = await agendamentoRepository.valid(
    //   agendamento.data_hora_inicio,
    //   agendamento.data_hora_fim,
    //   agendamento.funcionaria_id
    // );
    // if (!valid) {
    //   const err = new Error("Horário indisponível para a funcionária.");
    //   err.status = 409;
    //   throw err;
    // }
    const validAgendamento = validateAgendamento.parse(agendamento);
    return await agendamentoRepository.insert(validAgendamento);
  } catch (err) {
    err.status = err.status || 500;
    throw err;
  }
}
async function update(id, agendamento) {
  try {
    // const valid = await agendamentoRepository.valid(
    //   agendamento.data_hora_inicio,
    //   agendamento.data_hora_fim,
    //   agendamento.funcionaria_id
    // );
    // if (!valid) {
    //   const err = new Error("Horário indisponível para a funcionária.");
    //   err.status = 409;
    //   throw err;
    // }
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

export const agendamentoService = {
  list,
  getId,
  insert,
  update,
  remove,
};
