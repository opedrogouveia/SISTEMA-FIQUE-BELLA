import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
  const { data: metodoPagamento, error } = await supabaseAdmin
    .from("metodos_pagamento")
    .select();
  if (!metodoPagamento) throw error;
  return metodoPagamento;
}

export const metodoPagamentoRepository = {
  list,
};
