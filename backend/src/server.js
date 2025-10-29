import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth-route.js";
import servicosRoutes from "./routes/servicos-route.js";
import clientesRoutes from "./routes/clientes-route.js";
import funcionariosRoutes from "./routes/funcionarios-route.js";
import cors from "cors";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("API Fique Bella está ONLINE.");
});

app.use("/api/auth", authRoutes);
app.use("/api/servicos", servicosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/funcionarios", funcionariosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
