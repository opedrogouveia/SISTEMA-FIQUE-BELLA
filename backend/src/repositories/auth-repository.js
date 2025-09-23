import supabasePublic from "../database/public-connection.js";
import supabaseAdmin from "../database/admin-connection.js";

async function signIn(user) {
    try {
        const { data: authUser, error } =
            await supabasePublic.auth.signInWithPassword({
                email: user.email,
                password: user.senha,
            });
        if (error) {
            throw error;
        }
        return authUser;
    } catch (err) {
        throw err;
    }
}

async function register(user) {
    try {
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
    } catch (err) {
        throw err;
    }
}


const authRepository = {
    signIn,
    register,
    update,
    remove
};

export default authRepository;
