import { metodoPagamentoRepository } from "../repositories/metodo-pagamento-repository.js";
async function list() {
  try {
    return metodoPagamentoRepository.list();
  } catch (err) {
    throw err;
  }
}

export const metodoPagamentoService = {
  list,
};
