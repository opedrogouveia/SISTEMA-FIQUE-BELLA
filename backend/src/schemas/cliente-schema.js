import { z } from "zod";

export const validateCliente = z.object({
    nome: z.string().min(3),
    email: z.string(),
    telefone: z.string().min(10),
    data_nascimento: z.coerce.date()
});
