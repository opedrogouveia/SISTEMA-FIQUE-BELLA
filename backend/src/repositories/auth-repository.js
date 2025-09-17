const db = require('../database/connection');

async function findByEmail(email) {
    try {
        const query = "SELECT * FROM usuarios WHERE email = $1";
        const result = await db.query(query, [email]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};

async function createUser(nome, email, hashedPassword) {
    try {
        const query = "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id";
        const result = await db.query(query, [nome, email, hashedPassword]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};

module.exports = {
    findByEmail,
    createUser
};