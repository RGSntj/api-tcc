import { Router } from "express";
import { criarServicoOrcamento } from '../repository/servicosOrcamentoRepository.js'

import { consultarServicoId } from "../repository/servicoRepository.js";

const endpoints = Router();

endpoints.post("/servicos/orcamentos/:idOrcamento", async (req, resp) => {
    try {
        const { idOrcamento } = req.params;
        const arrayServicos = req.body.servicos;
        
        arrayServicos.map(async (id) => {
            const servico = await consultarServicoId(id);

            if (servico.length <= 0) {
                throw new Error("Serviço nao encontrado !!")
            }
        });

        const resposta = await criarServicoOrcamento(idOrcamento);

        return resp.send({ resposta });
    } catch (error) {
        // console.log(error);

        return resp.status(400).json({
            erro: error.message
        })
    }
})

export default endpoints;