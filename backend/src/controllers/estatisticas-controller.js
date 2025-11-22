import { supabaseAdmin } from "../database/admin-connection.js";
async function getDadosDashboard(req, res) {
  const { data_inicio, data_fim } = req.body;

  const { data, error } = await supabaseAdmin.rpc("get_dashboard_stats", {
    data_inicio,
    data_fim,
  });

  if (error) return res.status(500).json(error);
  return res.json(data);
}

export const estatisticasController = {
  getDadosDashboard,
};
