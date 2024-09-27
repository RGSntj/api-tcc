import db from '../db/connection.js';

export async function criarServico(servico){
    const comando = `insert into tb_servico (nm_servico, ds_servico, vl_preco)
                        Values (?, ?, ?)`

    let resposta = await db.query(comando,[servico.nome, servico.descricao, servico.preco])
    return resposta[0].insertId;
}

export async function consultarServicoId(idServico){
    const comando = `SELECT * FROM tb_servico
                            WHERE id_servico = ?`;

    const registro = await db.query(comando, [idServico])

    return registro[0]
}