import { Router } from "express";
import { criarServico } from "../repository/servicoRepository.js";

const endpoints = Router()

endpoints.post("/postar/servico", async (req, resp) => {
    try {
        const servico = req.body

        let resposta = await criarServico(servico)

        return resp.send({resposta})

    } catch (error) {
        resp.status(400).json({
            error: error.mensage
    })
    }
})

export default endpoints