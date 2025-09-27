import { funcionariosService } from "../services/funcionarios-service.js";

async function list(req, res) {
    try {
        const funcionarios = await funcionariosService.list();
        res.status(200).json(funcionarios);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function getId(req, res) {
    try {
        const funcionario = await funcionariosService.getId(req.params.id);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function insert(req, res) {
    try {
        console.log(req.body)
        const funcionario = await funcionariosService.insert(req.body);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const funcionario = await funcionariosService.update(req.params.id, req.body);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const funcionario = await funcionariosService.remove(req.params.id);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

export const funcionariosController = {
    list,
    getId,
    insert,
    update,
    remove,
};
