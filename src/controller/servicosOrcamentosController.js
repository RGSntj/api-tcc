import { Router } from "express";
import { criarServicoOrcamento } from '../repository/servicosOrcamentoRepository.js'

// import { consultarServicoId } from "../repository/servicoRepository.js";
import { alterarPrecoTotal, criarOrcamento } from "../repository/orcamentoRepository.js";

const endpoints = Router();

endpoints.post("/servicos/orcamentos", async (req, resp) => {
    const { descricao, arrayServicos } = req.body;

    try {
        const idOrcamento = await criarOrcamento(descricao);

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