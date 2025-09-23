import authRepository from "../repositories/auth-repository.js";
import supabase from "../database/public-connection.js";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

async function login(user) {
    try {
        const authUser = await authRepository.signIn(user);
        return authUser;
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


const authService = {
    login,
    register,
    update,
    remove
};


export default authService;
