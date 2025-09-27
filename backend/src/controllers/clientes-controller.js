import { clientesService } from "../services/clientes-service.js";

async function list(req, res) {
    try {
        const clientes = await clientesService.list();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function getId(req, res) {
    try {
        const cliente = await clientesService.getId(req.params.id);
        res.status(200).json(cliente);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function insert(req, res) {
    try {
        const cliente = await clientesService.insert(req.body);
        res.status(200).json(cliente);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const cliente = await clientesService.update(req.params.id, req.body);
        res.status(200).json(cliente);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const cliente = await clientesService.remove(req.params.id);
        res.status(200).json(cliente);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

export const clientesController = {
    list,
    getId,
    insert,
    update,
    remove,
};
