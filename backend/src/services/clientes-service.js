import { clientesRepository } from "../repositories/clientes-repository.js";
import { validateCliente } from "../schemas/cliente-schema.js";

async function list() {
    try {
        return await clientesRepository.list();
    } catch (err) {
        throw err;
    }
}

async function getId(id) {
    try {
        const cliente = await clientesRepository.getId(id);
        if (!cliente || cliente == []) {
            const err = new Error("Cliente não encontrado.");
            err.status = 404;
            throw err;
        }
        return cliente;
    } catch (err) {
        throw err;
    }
}

async function insert(cliente) {
    try {
        const validCliente = validateCliente.parse(cliente);
        return await clientesRepository.insert(validCliente);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

async function update(id, cliente) {
    try {
        const validCliente = validateCliente.parse(cliente);
        return await clientesRepository.update(id, validCliente);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

async function remove(id) {
    try {
        return clientesRepository.remove(id);
    } catch (err) {
        throw err;
    }
}

export const clientesService = {
    list,
    getId,
    insert,
    update,
    remove,
};
