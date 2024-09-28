import { Router } from "express";
import { criarServicoOrcamento } from '../repository/servicosOrcamentoRepository.js'

// import { consultarServicoId } from "../repository/servicoRepository.js";
import { alterarPrecoTotal } from "../repository/orcamentoRepository.js";

const endpoints = Router();

endpoints.post("/servicos/orcamentos/:idOrcamento", async (req, resp) => {
    try {
        const { idOrcamento } = req.params;
        const { arrayServicos } = req.body;

        await Promise.all(
            arrayServicos.map(async (id) => {
                return criarServicoOrcamento(idOrcamento, id);
            })
        )

        await alterarPrecoTotal(idOrcamento);

        return resp.status(201).send();
    }
    catch (error) {
        // console.log(error);

        return resp.status(400).json({
            erro: error.message
        })
    }
})

export default endpoints;