import { supabasePublic } from "../database/public-connection.js";
import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
    const { data: servicos, error } = await supabasePublic
        .from("servicos")
        .select();
    if (error) throw error;
    return servicos;
}

async function getId(id) {
    const { data: servico, error } = await supabasePublic
        .from("servicos")
        .select()
        .eq("servico_id", id);
    if (error) throw error;
    return servico;
}

async function insert(servico) {
    const { data: newServico, error } = await supabaseAdmin
        .from("servicos")
        .insert(servico)
        .select()
        .single();
    if (error) throw error;
    return newServico;
}

async function update(id, servico) {
    const { data: updatedServico, error } = await supabaseAdmin
        .from("servicos")
        .update(servico)
        .eq("servico_id", id)
        .select()
        .single();
    if (error) throw error;
    return updatedServico;
}

async function remove(id) {
    const { data: removedServico, error } = await supabaseAdmin
        .from("servicos")
        .delete()
        .eq("servico_id", id)
        .select()
        .single();
    if (error) throw error;
    return removedServico;
}

export const servicosRepository = {
    list,
    getId,
    insert,
    update,
    remove,
};
