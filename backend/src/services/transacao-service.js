import { transacaoRepository } from "../repositories/transacoes-repository.js";
import { validateFaturamento } from "../schemas/transacoes-schema.js";

async function list() {
  try {
    return await transacaoRepository.list();
  } catch (err) {
    throw err;
  }
}

async function insert(transacao) {
  try {
    transacao.data_pagamento = new Date();
    transacao.updated_at = new Date();
    const validTransacao = validateFaturamento.parse(transacao);
    return await transacaoRepository.insert(validTransacao);
  } catch (err) {
    err.status = err.status || 500;
    throw err;
  }
}
async function update(id, transacao) {
  try {
    const validtransacao = validateFaturamento.parse(transacao);
    return await transacaoRepository.update(id, validtransacao);
  } catch (err) {
    err.status = err.status || 500;
    throw err;
  }
}
async function remove(id) {
  try {
    return transacaoRepository.remove(id);
  } catch (err) {
    throw err;
  }
}

export const transacaoService = {
  list,
  insert,
  update,
  remove,
};
