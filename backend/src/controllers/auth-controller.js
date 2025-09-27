import { authService } from "../services/auth-service.js";

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

// async function update(req, res) {
//     try {
//         const authenticatedUserId = req.user.id;
//         const targetUserId = req.params.id;
//         const userData = req.body;

//         const updatedUser = await authService.update(
//             authenticatedUserId,
//             targetUserId,
//             userData
//         );

//         res.status(200).json({
//             message: "Usuário atualizado com sucesso.",
//             user: updatedUser,
//         });
//     } catch (err) {
//         res.status(err.status || 500).json({ error: err.message });
//     }
// }

// async function remove(req, res) {
//     try {
//         const authenticatedUserId = req.user.id;
//         const targetUserId = req.params.id;

//         await authService.remove(authenticatedUserId, targetUserId);

//         res.status(200).json({ message: "Usuário deletado com sucesso." });
//     } catch (err) {
//         res.status(err.status || 500).json({ error: err.message });
//     }
// }

export const authController = {
    login,
    register,
    // update,
    // remove,
};
