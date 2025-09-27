import { supabasePublic } from "../database/public-connection.js";
import { supabaseAdmin } from "../database/admin-connection.js";

async function list() {
    const { data: clientes, error } = await supabaseAdmin
        .from("clientes")
        .select();
    console.log(clientes, error)
    if (error) throw error;
    return clientes;
}

async function getId(id) {
    const { data: cliente, error } = await supabaseAdmin
        .from("clientes")
        .select()
        .eq("cliente_id", id);
    if (error) throw error;
    return cliente;
}

async function insert(cliente) {
    const { data: newCliente, error } = await supabaseAdmin
        .from("clientes")
        .insert(cliente)
        .select()
        .single();
    if (error) throw error;
    return newCliente;
}

async function update(id, cliente) {
    const { data: updatedCliente, error } = await supabaseAdmin
        .from("clientes")
        .update(cliente)
        .eq("cliente_id", id)
        .select()
        .single();
    if (error) throw error;
    return updatedCliente;
}

async function remove(id) {
    const { data: removedCliente, error } = await supabaseAdmin
        .from("clientes")
        .delete()
        .eq("cliente_id", id)
        .select()
        .single();
    if (error) throw error;
    return removedCliente;
}

export const clientesRepository = {
    list,
    getId,
    insert,
    update,
    remove,
};
