import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
  const { data: transacoes, error } = await supabaseAdmin
    .from("transacoes")
    .select()
    .order("data_pagamento", { ascending: false });
  if (error) throw error;
  return transacoes;
}

async function insert(transacao) {
  const { data: novaTransacao, error } = await supabaseAdmin
    .from("transacoes")
    .insert(transacao)
    .select()
    .single();
  if (error) throw error;
  return novaTransacao;
}
async function update(id, transacao) {
  const { data: transacaoAtualizada, error } = await supabaseAdmin
    .from("transacoes")
    .update(transacao)
    .eq("transacao_id", id)
    .select()
    .single();
  if (error) throw error;
  return transacaoAtualizada;
}
async function remove(id) {
  const { data: transacaoRemovida, error } = await supabaseAdmin
    .from("transacoes")
    .delete()
    .eq("transacao_id", id)
    .select()
    .single();
  if (error) throw error;
  return transacaoRemovida;
}

export const transacaoRepository = {
  list,
  insert,
  update,
  remove,
};
