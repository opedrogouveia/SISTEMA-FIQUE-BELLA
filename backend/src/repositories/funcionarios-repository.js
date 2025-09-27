import { supabasePublic } from "../database/public-connection.js";
import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
    const { data: funcionarios, error } = await supabaseAdmin
        .from("funcionarios")
        .select();
    if (error) throw error;
    return funcionarios;
}

async function getId(id) {
    const { data: funcionario, error } = await supabaseAdmin
        .from("funcionarios")
        .select()
        .eq("funcionario_id", id);
    if (error) throw error;
    return funcionario;
}

async function insert(funcionario) {
    const { data: newFuncionario, error } = await supabaseAdmin
        .from("funcionarios")
        .insert(funcionario)
        .select()
        .single();
    if (error) throw error;
    return newFuncionario;
}

async function update(id, funcionario) {
    const { data: updatedFuncionario, error } = await supabaseAdmin
        .from("funcionarios")
        .update(funcionario)
        .eq("funcionario_id", id)
        .select()
        .single();
    if (error) throw error;
    return updatedFuncionario;
}

async function remove(id) {
    const { data: removedFuncionario, error } = await supabaseAdmin
        .from("funcionarios")
        .delete()
        .eq("funcionario_id", id)
        .select()
        .single();
    if (error) throw error;
    return removedFuncionario;
}

export const funcionariosRepository = {
    list,
    getId,
    insert,
    update,
    remove,
};
