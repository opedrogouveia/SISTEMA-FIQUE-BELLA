import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
  const { data: agendamentos, error } = await supabaseAdmin
    .from("agendamentos")
    .select()
    .order("created_at", { ascending: false });
  if (error) throw error;
  return agendamentos;
}

async function getId(id) {
  const { data: agendamento, error } = await supabaseAdmin
    .from("agendamentos")
    .select()
    .eq("agendamento_id", id)
    .single();
  if (error) throw error;
  return agendamento;
}

async function insert(agendamento) {
  const { data: newAgendamento, error } = await supabaseAdmin
    .from("agendamentos")
    .insert(agendamento)
    .select()
    .single();
  if (error) throw error;
  return newAgendamento;
}
async function update(id, agendamento) {
  const { data: updatedAgendamento, error } = await supabaseAdmin
    .from("agendamentos")
    .update(agendamento)
    .eq("agendamento_id", id)
    .select()
    .single();
  if (error) throw error;
  return updatedAgendamento;
}
async function remove(id) {
  const { data: removedAgendamento, error } = await supabaseAdmin
    .from("agendamentos")
    .delete()
    .eq("agendamento_id", id)
    .select()
    .single();
  if (error) throw error;
  return removedAgendamento;
}

async function valid(data_inicio, data_fim, id_funcionaria) {
  const { data: agendamento, error } = await supabaseAdmin
    .from("agendamentos")
    .select()
    .eq("funcionaria_id", id_funcionaria)
    .eq("data_hora_inicio", data_inicio)
    .eq("data_hora_fim", data_fim);
  if (error) throw error;
  return agendamento.length === 0;
}

export const agendamentoRepository = {
  list,
  getId,
  insert,
  update,
  remove,
  valid,
};
