import orcamentoController from '../src/controller/orcamentoController.js';
import servicoController from "../src/controller/servicoController.js"

import servicoOrcamentoController from '../src/controller/servicosOrcamentosController.js'

export function criarRotas(servidor){
    servidor.use(orcamentoController)
    servidor.use(servicoController)
    servidor.use(servicoOrcamentoController);
}