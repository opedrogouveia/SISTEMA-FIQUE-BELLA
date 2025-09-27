import { servicosRepository } from "../repositories/servicos-repository.js";
import { validateServico } from "../schemas/servico-schema.js";

async function list() {
    try {
        return await servicosRepository.list();
    } catch (err) {
        throw err;
    }
}

async function getId(id) {
    try {
        const servico = await servicosRepository.getId(id);
        if (!servico || servico == []) {
            const err = new Error("Serviço não encontrado.");
            err.status = 404;
            throw err;
        }
        return servico;
    } catch (err) {
        throw err;
    }
}

async function insert(servico) {
    try {
        const validServico = validateServico.parse(servico);
        return await servicosRepository.insert(validServico);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

async function update(id, servico) {
    try {
        const validServico = validateServico.parse(servico);
        return await servicosRepository.update(id, validServico);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

async function remove(id) {
    try {
        return servicosRepository.remove(id);
    } catch (err) {
        throw err;
    }
}

export const servicosService = {
    list,
    getId,
    insert,
    update,
    remove,
};
