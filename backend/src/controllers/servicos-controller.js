import { servicosService } from "../services/servicos-service.js";

async function list(req, res) {
    try {
        const servicos = await servicosService.list();
        res.status(200).json(servicos);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function getId(req, res) {
    try {
        const servico = await servicosService.getId(req.params.id);
        res.status(200).json(servico);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function insert(req, res) {
    try {
        const servico = await servicosService.insert(req.body);
        res.status(200).json(servico);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const servico = await servicosService.update(req.params.id, req.body);
        res.status(200).json(servico);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const servico = await servicosService.remove(req.params.id);
        res.status(200).json(servico);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

export const servicosController = {
    list,
    getId,
    insert,
    update,
    remove,
};
