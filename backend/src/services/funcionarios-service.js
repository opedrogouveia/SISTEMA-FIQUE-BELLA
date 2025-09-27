import { funcionariosRepository } from "../repositories/funcionarios-repository.js";
import { validateFuncionario } from "../schemas/funcionario-schema.js";

async function list() {
    try {
        return await funcionariosRepository.list();
    } catch (err) {
        throw err;
    }
}

async function getId(id) {
    try {
        const funcionario = await funcionariosRepository.getId(id);
        if (!funcionario || funcionario == []) {
            const err = new Error("Funcionário não encontrado.");
            err.status = 404;
            throw err;
        }
        return funcionario;
    } catch (err) {
        throw err;
    }
}

async function insert(funcionario) {
    try {
        const validFuncionario = validateFuncionario.parse(funcionario);
        return await funcionariosRepository.insert(validFuncionario);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        throw err;
    }
}

async function update(id, funcionario) {
    try {
        const validFuncionario = validateFuncionario.parse(funcionario);
        return await funcionariosRepository.update(id, validFuncionario);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

async function remove(id) {
    try {
        return funcionariosRepository.remove(id);
    } catch (err) {
        throw err;
    }
}

export const funcionariosService = {
    list,
    getId,
    insert,
    update,
    remove,
};
