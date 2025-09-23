import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth-route.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Fique Bella está ONLINE.");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
