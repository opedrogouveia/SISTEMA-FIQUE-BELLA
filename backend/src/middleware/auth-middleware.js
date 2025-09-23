import supabaseAdmin from "../database/admin-connection.js";

async function verificarToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Acesso não autorizado: Token não fornecido." });
        }
        const token = authHeader.split(" ")[1];
        const { data: { user }, error, } = await supabaseAdmin.auth.getUser(token);
        if (error || !user) {
            return res
                .status(401)
                .json({
                    error: "Acesso não autorizado: Token inválido ou expirado.",
                });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({
            error: "Erro interno no servidor durante a autenticação.",
        });
    }
}

export default verificarToken;
