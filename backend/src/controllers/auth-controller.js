import authService from "../services/auth-service.js";

async function login(req, res) {
    try {
        const user = req.body;
        const authUser = await authService.login(user);
        res.status(200).json({
            message: "Login bem-sucedido.",
            session: authUser.session,
            user: authUser.user,
        });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function register(req, res) {
    const user = req.body;
    try {
        const newUser = await authService.register(user);
        res.status(201).json({
            message: "Usuário registrado com sucesso!",
            user: newUser,
        });
    } catch (err) {
        res.status(err.status).json({ error: err.message });
    }
}


const authController = {
    login,
    register,
    update,
    remove,
};

export default authController;
