import { z } from "zod";

export const validateServico = z.object({
  nome: z.string().min(3),
  preco: z.number().positive(),
  duracao: z.number().positive(),
});
