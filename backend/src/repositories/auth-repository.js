import { supabasePublic } from "../database/public-connection.js";
import { supabaseAdmin } from "../database/admin-connection.js";

async function signIn(user) {
    const { data: authUser, error } =
        await supabasePublic.auth.signInWithPassword({
            email: user.email,
            password: user.senha,
        });
    if (error) {
        throw error;
    }
    return authUser;
}

async function register(user) {
    const { data: authData, error: authError } =
        await supabasePublic.auth.signUp({
            email: user.email,
            password: user.senha,
        });
    if (authError) {
        throw authError;
    }

    user.usuario_id = authData.user.id;
    const { senha, ...userData } = user;

    const { data, error } = await supabasePublic
        .from("usuarios")
        .insert(userData);
    if (error) {
        const { error: deleteError } =
            await supabaseAdmin.auth.admin.deleteUser(authData.user.id); // CASO O INSERT FALHE, DELETA O USUÁRIO DO auth.users
        if (deleteError) {
            throw deleteError;
        }
        throw error;
    }
    return authData.user;
}

// async function update(userId, userData) {
//     const { data, error } = await supabaseAdmin
//         .from("usuarios")
//         .update(userData)
//         .eq("usuario_id", userId)
//         .select()
//         .single();
//     if (error) throw error;
//     return data;
// }

// // Remove um usuário completamente
// async function remove(userId) {
//         const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
//         if (error) throw error;
//         return true;
// }

export const authRepository = {
    signIn,
    register,
    // update,
    // remove,
};
