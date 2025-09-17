const authService = require('../repositories/auth-repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(email, senha) {
    try {
        const user = await authService.findByEmail(email);
        if (!user) {
            throw new Error("Email inválido.");
        }
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new Error("Senha inválida.");
        }
        const token = jwt.sign({ id:user.id }, '123456', { expiresIn: "1h" });
        return token;
    } catch (err) {
        throw err;
    }
};

async function registerUser(nome, email, senha) {
    try {
        const hashedPassword = await bcrypt.hash(senha, 10); //criptografa a senha
        const newUser = authService.createUser(nome, email, hashedPassword);
        return newUser;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    login,
    registerUser
};