import { authRepository } from "../repositories/auth-repository.js";

async function login(user) {
    try {
        return await authRepository.signIn(user);
    } catch (err) {
        throw err;
    }
}

async function register(user) {
    if (!user || !user.nome || !user.email || !user.senha) {
        const err = new Error("Preencha todos os campos.");
        err.status = 400;
        throw err;
    }
    try {
        return await authRepository.register(user);
    } catch (err) {
        err.status = err.status || 500;
        throw err;
    }
}

// async function update(authenticatedUserId, targetUserId, userData) {
//     if (authenticatedUserId !== targetUserId) {
//         const err = new Error("Acesso negado. Permissão para atualizar apenas o próprio perfil.");
//         err.status = 403;
//         throw err;
//     }

//     delete userData.cargo;
//     delete userData.usuario_id;
//     delete userData.email; // Geralmente o e-mail é alterado em um fluxo separado

//     return authRepository.update(targetUserId, userData);
// }

// async function remove(authenticatedUserId, targetUserId) {
//     // REGRA DE NEGÓCIO: Um usuário só pode deletar o próprio perfil.
//     // (Futuramente, você pode adicionar: ... && cargo !== 'admin')
//     if (authenticatedUserId !== targetUserId) {
//         const err = new Error("Acesso negado. Permissão para deletar apenas o próprio perfil.");
//         err.status = 403; // Forbidden
//         throw err;
//     }
//     return authRepository.remove(targetUserId);
// }

export const authService = {
    login,
    register,
    // update,
    // remove
};
