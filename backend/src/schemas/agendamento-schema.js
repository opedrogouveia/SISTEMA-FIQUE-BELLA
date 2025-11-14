import z from "zod";

export const validateAgendamento = z.object({
  cliente_id: z.string().min(2),
  funcionaria_id: z.string().min(2),
  servico_id: z.string().min(2),
  data_hora_inicio: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: "Data inválida" }),
  data_hora_fim: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  status: z.enum(["Agendado", "Concluído", "Cancelado"]),
});
