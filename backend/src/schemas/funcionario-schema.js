import { z } from "zod";

export const validateFuncionario = z.object({
    nome: z.string().min(3),
    email: z.string(),
    telefone: z.string().min(10),
    especialidades: z.array(z.string()).nonempty()
});
