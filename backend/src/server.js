const express = require('express');
const db = require('./database/connection');
const authRoutes = require('./routes/auth-route');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API Fique Bella está ONLINE.");
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
