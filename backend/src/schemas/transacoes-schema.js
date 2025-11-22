import { z } from "zod";
export const validateFaturamento = z.object({
  cliente_id: z.string().optional(),
  agendamento_id: z.string().optional(),
  metodo_pagamento_id: z.string().optional(),
  // valor_bruto: z.number().nonnegative(),
  // desconto: z.number().nonnegative(),
  // acrescimo: z.number().nonnegative(),
  valor_pago: z.number().nonnegative(),
  data_pagamento: z.date().optional(),
});
