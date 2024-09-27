import { Router } from "express";
import { criarOrcamento, consultarOrcamentos } from "../repository/orcamentoRepository.js";


const endpoints = Router();

endpoints.post("/orcamento", async (req, resp) => {
    try {
        const orcamento = req.body;

        const resposta = await criarOrcamento(orcamento);

        resp.send({ resposta })
    } catch (error) {
        console.log(error);

        return resp.status(400).json({
            erro: error.message
        })
    }
})

endpoints.get("/orcamento/consultar", async (req, resp) => {
    try {
        const resposta = await consultarOrcamentos()
        
        resp.send(resposta)
    } catch (error) {
        console.log(error);

        return resp.status(400).json({
            erro: error.message
        })
    }
})

export default endpoints;