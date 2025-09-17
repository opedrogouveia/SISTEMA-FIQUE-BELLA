const { Client } = require('pg');

const client = new Client ({
    user: "postgres",
    host: "localhost",
    database: "fique_bella",
    password: "1234",
    port: 5432
});

client.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err.stack);
    } else {
        console.log("Conectado ao banco de dados PostgreSQL!");
    }
});

module.exports = client;