const authService = require('../services/auth-service');

async function login(req, res) {
    try {
        const { email, senha } = req.body;
        const token = await authService.login(email, senha);
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

async function register(req, res) {
    try {
        const { nome, email, senha } = req.body;
        const user = await authService.registerUser(nome, email, senha);
        res.status(201).json({ message: "Usuário registrado com sucesso!", userId: user.id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    login,
    register
}